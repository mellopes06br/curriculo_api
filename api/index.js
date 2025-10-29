import express from 'express'

const app = express()

app.get('/', function(req, res) {
    res.json('Rota inicial')
})

app.get('/user', function(req,res) {
    res.json('Rota user')
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
}) 