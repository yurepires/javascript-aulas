import express from 'express'

const app = express()
const port = 8900

import handlebars from 'express-handlebars'
import Handlebars from 'handlebars'
import bodyParser from 'body-parser'
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'

import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/* configuração da visão */
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')))

// configuração do bodyparser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// rotas do sistema
app.get('/', (req, res) => {
    res.render('home/index')
})

import produto from './routes/produto.js'
app.use('/produto', produto)

import usuario from './routes/usuario.js'
app.use('/usuario', usuario)

import admin from './routes/admin.js'
import auth from './middlewares/auth.js'
app.use('/admin', auth, admin)

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:" + port)
})