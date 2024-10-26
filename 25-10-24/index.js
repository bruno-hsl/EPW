const express = require('express')
const path = require("path") //servir o diretorio
const app = express()
const port = 3000

app.get('/cssH', (req, res) => {
    const filePath = path.join(__dirname, "public", "css", "home.css") //informar o caminho
    res.sendFile(filePath) //gerando o caminho para o cliente
})

app.get('/cssS', (req, res) => {
    const filePath = path.join(__dirname, "public", "css", "sobre.css") //informar o caminho
    res.sendFile(filePath) //gerando o caminho para o cliente
})

app.get('/js', (req, res) => {
    const filePath = path.join(__dirname, "public", "script.js") //informar o caminho
    res.sendFile(filePath) //gerando o caminho para o cliente
})

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, "public", "index.html") //informar o caminho
    res.sendFile(filePath) //gerando o caminho para o cliente
})

app.get('/contato', (req, res) => {
    const filePath = path.join(__dirname, "public", "contato.html") //informar o caminho
    res.sendFile(filePath) //gerando o caminho para o cliente
})


app.get('/sobre', (req, res) => {
    const filePath = path.join(__dirname, "public", "sobre.html") //informar o caminho
    res.sendFile(filePath) //gerando o caminho para o cliente
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})