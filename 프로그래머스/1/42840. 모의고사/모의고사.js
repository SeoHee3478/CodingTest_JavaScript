// 1번 수포자 규칙: 1,2,3,4,5 //5개
// 2번 수포자 규칙: 2,1,2,3,2,4,2,5 //8개
// 3번 수포자 규칙: 3,3,1,1,2,2,4,4,5,5 //10개
function compare(array,answers){
    let correct=0;
    let j = 0;
    for(let i = 0; i<answers.length;i++){
        if(answers[i]==array[j]) {
            correct+=1;
        };
        j++;
        if(j==array.length)j=0;
    }
    return correct;
} 

function solution(answers) {
    var answer = [];
    let scoreArr = [];
    
    const one = [1,2,3,4,5]
    const two = [2,1,2,3,2,4,2,5]
    const three = [3,3,1,1,2,2,4,4,5,5]
    
    scoreArr.push(compare(one, answers));
    scoreArr.push(compare(two, answers));
    scoreArr.push(compare(three, answers));
    
    // 가장 많이 맞춘사람의 번호 출력
    let maxScore = Math.max(...scoreArr);
    scoreArr.forEach((item, index)=>{if(maxScore==item)answer.push(index+1)})
    return answer;
}