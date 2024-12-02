import express from 'express'
import home from './html/home.js'
import produtos from './html/produtos.js'
import sobre from './html/sobre.js'

const app = express()
const port = 8010

app.get('/', (req, res) => {
    res.send(home.function())
})

app.get('/produtos', (req, res) => {
    res.send(produtos.function())
})

app.get('/sobre', (req, res) => {
    res.send(sobre.function())
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:" + port)
})