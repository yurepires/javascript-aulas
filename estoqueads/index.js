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

app.get('/', (req, res) => {
    
    var aluno = {
        nome: "Yureee",
        nota: 9.2
    }

    // Um objeto é criado e enviado ao html com os dados (se enviar apenas uma variavel, colocar )
    res.render('admin/index', {aluno})
})

app.get('/contato', (req, res) => {
    res.render('admin/contato')
})

app.get('/cadastro', (req, res) => {
    res.render('produto/cadastro')
})

app.post('/cadastro', (req, res) => {
    var produto = {
        descricao: req.body.descricao,
        preco: req.body.preco,
        estoque: req.body.estoque,
        status: 1,
        foto: 'img/semfoto.png'
    }
    res.render('produto/detalhe', {produto})
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:" + port)
})