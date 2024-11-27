import express from 'express'

const app = express()
const port = 8010

app.get('/', (req, res) => {
    res.send('Imsoolazy')
})

app.get('/cliente', (req, res) => {
    res.send('<h3>Listagem de clientes</h3>')
})

app.get('/produto/:id', (req, res) => {
    let codigo = req.params.id * 33
    res.send('Meu produto: ' + codigo)
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:" + port)
})