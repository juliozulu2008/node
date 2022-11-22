// exempo de Single tread 

const crypto= require("crypto");
const start = Date.now();

function logHashTime(){
    crypto.pbkdf2("a","b",100000 ,512,"sha512" ,()=>{ // todas as bliblitecas do node que sao assyncronas o ultimo parametro delas é um callback
        console.log(`Hash: ${Date.now() - start}`);
    })
}

logHashTime();
logHashTime(); 
logHashTime(); 
logHashTime();
// quando o processamento é ate 4 o Tread Pool resolve
// qaundo é mais dai o bixo pega