import express from 'express'

const app = express()
const port = 8010

import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/conteudo/index.html')
})

app.get('/cadastrar', (req, res) => {
    res.sendFile(__dirname+'/conteudo/cadastrar.html')
})

app.get('/listar', (req, res) => {
    res.sendFile(__dirname+'/conteudo/listar.html')
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:" + port)
})