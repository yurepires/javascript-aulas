import Produto from "../models/Produto.js"

class ProdutoController {

    index = async (req, res) => {
        const produtos = await Produto.findAll()
        res.render('produto/index', {produtos: produtos})
    }



} //Fim da classe

export default new ProdutoController()