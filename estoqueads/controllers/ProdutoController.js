import Produto from "../models/Produto.js"

class ProdutoController {

    index = async (req, res) => {
        const produtos = await Produto.findAll()
        res.render('produto/index', {produtos: produtos})
    }

    cadastrar = (req, res) => {
        res.render('produto/cadastrar')
    }

    salvar = async (req, res) => {
        let produto = {
            descricao: req.body.descricao,
            estoque: req.body.estoque,
            preco: req.body.preco,
            status: 1
        }

        Produto.create(produto).then(() => {
            res.redirect('/produto')
        })
    }

} //Fim da classe

export default new ProdutoController()