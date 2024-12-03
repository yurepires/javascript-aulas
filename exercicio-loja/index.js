import express from 'express'
import home from './html/home.js'
import produtos from './html/produtos.js'
import sobre from './html/sobre.js'

const app = express()
const port = 8010

// Importar arquivos
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//dizer para o node a pasta de conteudos estaticos
//public é só o nome da pasta, não sendo obrigatório usar sempre public
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.sendFile(__dirname+'/html-professor/index.html')
})

app.get('/produtos', (req, res) => {
    res.sendFile(__dirname+'/html-professor/produtos.html')
})

app.get('/sobre', (req, res) => {
    res.sendFile(__dirname+'/html-professor/sobre.html')
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:" + port)
})