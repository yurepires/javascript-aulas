import express from 'express'
import ProdutoController from '../controllers/ProdutoController.js'

const router = express.Router()

router.get('/lista', ProdutoController.lista)

router.get('/cadastro', (req, res) => {
    res.render('produto/cadastro')
})

export default router