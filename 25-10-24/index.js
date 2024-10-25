const express = require('express')
const path = require("path") //servir o diretorio
const app = express()
const port = 3000

app.get('/css', (req, res) => {
    const filePath = path.join(__dirname, "public", "css", "home.css") //informar o caminho
    res.sendFile(filePath) //gerando o caminho para o cliente
})

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, "public", "index.html") //informar o caminho
    res.sendFile(filePath) //gerando o caminho para o cliente
})

app.get ('/contato', (req, res) =>{
    const filePath = path.join(__dirname, "public", "contato.html") 
})

app.get ('/sobre', (req, res) =>{
    const filePath = path.join(__dirname, "public", "sobre.html") 
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})