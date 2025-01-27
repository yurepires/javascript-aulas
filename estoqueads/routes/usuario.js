import express from 'express'
import UsuarioController from '../controllers/UsuarioController.js'

const router = express.Router()

router.get('/cadastro', UsuarioController.cadastrar)

router.post('/salvar', UsuarioController.salvar)

router.get('/login', UsuarioController.loginPage)

router.post('/login', UsuarioController.login)

export default router