//exemplo de metodo bloqueante

const fs = require("fs");

console.log(process.hrtime()[0]/60);

const dados = fs.readFileSync("file.txt"); // Sync = bloqueante

console.log("Executando o consolle apos o arquivo");

console.log(process.hrtime()[0]/60);