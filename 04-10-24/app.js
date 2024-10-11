// importa o modulo htp do node JS
const http = require('http');

//cria o servidor 
const server = http.createServer((req, res) => {
//define o cabeçalho de respostas como 'text/plain'
    res.writeHead(200, { 'content-Type': 'text/plain'});

    //envia respostas "hello word " para o cliente
    res.and('hollo word');

});

//define a porta  do servidor ex 3000
const port = 3000;


//faz o servidor escutar a porta 3000
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});