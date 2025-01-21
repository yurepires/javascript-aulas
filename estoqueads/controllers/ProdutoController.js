class ProdutoController {

    lista = (req, res) => {
        res.render('produto/lista')
    }



} //Fim da classe

export default new ProdutoController()