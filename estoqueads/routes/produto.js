import express from 'express'
import ProdutoController from '../controllers/ProdutoController.js'

const router = express.Router()

router.get('/', ProdutoController.index)

router.get('/cadastro', ProdutoController.cadastrar)

router.post('/salvar', ProdutoController.salvar)

export default router