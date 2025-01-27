import Usuario from "../models/Usuario.js"
import Produto from "../models/Produto.js"
import { where } from "sequelize"

class AdminController {
    index = (req, res) => {
        res.render('admin/index')
    }

    // gerenciarProdutos = (req, res) => {

    // }

    listarUsuarios = async (req, res) => {
        try{
            const users = await Usuario.findAll({
                attributes: {exclude: ['senha', 'createdAt', 'updatedAt']}
            })

            res.status(200).json({message: 'usuarios listados com sucesso', users})
        }catch(err){
            res.status(500).json({message: 'Falha no servidor'})
        }
    }
}

export default new AdminController()