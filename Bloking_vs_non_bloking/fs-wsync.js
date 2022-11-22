const fs = require("fs");

console.log(process.hrtime()[0] / 60);
const dados = fs.readFile("arquivo.txt", (err, data)=> {
    if(err) throw err;
    
});
console.log("Executando o consolle apos o arquivo");
console.log(process.hrtime()[0] / 60);