import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Imsoolazy is the better than anyone!')
})

app.listen(3200, () => {
    console.log("Example app listening on port 3200")
})