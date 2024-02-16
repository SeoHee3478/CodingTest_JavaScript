function solution(word) {
    const alpha = ["A", "E", "I", "O", "U"];
    let answer = 0;
    let mul = [781, 156, 31, 6, 1];

    for(let i=0; i<word.length; i++){
        answer += (alpha.indexOf(word[i]) * mul[i]) + 1;
    }
    
    return answer;
}
