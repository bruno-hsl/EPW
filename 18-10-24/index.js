const express = require('express')
const path = require("path"); //servir o diretório
const app = express()
const port = 3000


//rota principal
app.get('/', (req, res) => {
  //res.send('Hello World!')
  const filePath = path.join(__dirname, "public", "index.html") //informando o caminho
  res.sendFile(filePath) // gerando o caminho para o cliente
})

app.get ('/contato', (req, res) => {
    const filePath = path.join(__dirname, "public", "contato.html") //informando o caminho
    res.sendFile(filePath) // gerando o caminho para o cliente
})

app.use(express.urlencoded({extended: true})) //middleware para tratar 
app.post('/resultado', (req, res) => {
    const {nome, email} = req.body
    res.send(`dados recebidos. Seja bem vindo ${nome} `)
})

app.get('/script', (req, res) => {
    //res.send('Hello World!')
    const filePath = path.join(__dirname, "public", "script.js") //informando o caminho
    res.sendFile(filePath) // gerando o caminho para o cliente
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})