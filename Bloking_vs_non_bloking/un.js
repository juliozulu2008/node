const fs = require("fs");
//exemplo de metodo nao bloqueante  metodo nao bloqueante
fs.readFile("arquivo.txt",(err, data)=>{
    if(error) throw err;
    console.log(data);
    fs.unlink("arquvo.txt", (unlink)=>{
        if(unlinkErr) throw unlink;
        console.log("arquivo excluido com sucesso!")
    })
});
