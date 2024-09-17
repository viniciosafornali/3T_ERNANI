//UTILIZANDO MODULOS CJS
//const fs = require('node:fs');
const http = require('node:http');
//const os = require('node:os');
const PORT = 8000;
const server = http.createServer((req, res) =>{
 if (req.url === '/'){
   res.writehead(200, {'Content-Type': 'text/html'});
   res.write('<h1>Bem-Vindo(a) à homepage!</h1>');
   res.end();
 }else if (req.url === '/sobre'){
     res.writehead(200, {'Content-Type': 'text/html'});
     res.write('<h1>Bem-Vindo(a) à homepage!</h1>');
     res.end();
});

server.listen(PORT, () =>{
console.log(`servidor rodando na porta ${PORT}` );
});;
