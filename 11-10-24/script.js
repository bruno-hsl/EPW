const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! - 11-10-24')
})

app.get('/sobre', (req, res) =>{
  res.send('Pagine sobre')
})

app.use(express.urlencoded({ extended: true}));
app.post("/adicioar", (req, res) => {
  const nome = req.body.nome;
  res.send(`nome recebido: ${nome}`);
});

app.put("/atualizar", (req, res) => {
  const id = req.body.id;
  res.send(`Atualizando o item com ID: ${id}`);
});

app.delete("/remover", (req, res) => {
  const id = req.body.id;
  res.send(`Removendo o item com ID: ${id}`);
});

app.get("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Usuário com ID: ${id}`);
});

app.get("/buscar", (req, res) => {
  const nome = req.query.nome;
  res.send(`Buscando usuário: ${nome}`);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
