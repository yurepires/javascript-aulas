import Usuario from "../models/Usuario.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

class UsuarioController {

    cadastrar = (req, res) => {
        res.render('usuario/cadastro')
    }

    salvar = async (req, res) => {
        try{
            const senha = req.body.senha
            const salt = await bcrypt.genSalt(10) //nível de encriptação
            const hashSenha = await bcrypt.hash(senha, salt)

            const user = {
                nome: req.body.nome,
                email: req.body.email,
                senha: hashSenha
            }

            await Usuario.create(user)

            return res.redirect('/produto')
        } catch (err) {
            return res.status(500)
        }
    }

    loginPage = (req, res) => {
        res.render('usuario/login')
    }

    login = async (req, res) => {
        try{
            //Busca usuário no bd
            const user = await Usuario.findOne({
                where:{
                    email: req.body.email
                }
            })

            //verifica se o usuário digitou o email certo
            if(user === null){
                return res.status(404).json({message: "Usuário não encontrado."})
            }

            //compar a senha hash do banco e a senha que o usuário digitou
            const isMatch = await bcrypt.compare(req.body.senha, user.senha)

            if(!isMatch){
                return res.status(400).json({message: "Senha incorreta!"})
            }

            //gera o token jwt
            //DOTENV.CONFIG NECESSÁRIO PARA ACESSAR O ARQUIVO .ENV
            dotenv.config()
            const token = jwt.sign({id: user.id}, JWT_SECRET, {expiresIn: '5m'})

            
            return res.redirect('/produto')
        } catch (err) {
            return res.status(500)
        }
    }
}

export default new UsuarioController()