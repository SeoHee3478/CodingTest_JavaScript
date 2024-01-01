const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let codeNumber = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for(i=0;i<str.length;i++){
       if( str[i].charCodeAt() < 97){
           codeNumber+= str[i].toLowerCase()
       }else if(str[i].charCodeAt() >=97){
          codeNumber+=str[i].toUpperCase()
       }
        
    }
    console.log(codeNumber)
});