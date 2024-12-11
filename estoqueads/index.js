import express from 'express'

const app = express()
const port = 8900

import handlebars from 'express-handlebars'
import Handlebars from 'handlebars'
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

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:" + port)
})