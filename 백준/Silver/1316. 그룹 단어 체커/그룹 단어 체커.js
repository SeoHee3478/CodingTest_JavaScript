let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0]);
let cnt = 0;

for(i=1; i<=number; i++){
    let word = input[i];
    if(check(word)) cnt +=1;
    function check(data){
        let setData = new Set(data[0]);
        for(let i = 0; i< data.length -1; i++){
            // 오른쪽 단어와 다르다면
            if (data[i] != data[i + 1]){
                // 이미 등장한 적 있는 알파벳이라면
                if(setData.has(data[i+1])){
                    return false;
                }
                else{
                    setData.add(data[i + 1]);
                }
            }
        }
        return true;
    }
}
console.log(cnt);