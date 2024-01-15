function solution(numbers) {
    //숫자를 문자열로 반환
    //문자열을 합쳐서 비교하여 정렬
    //정렬된 문자열을 합침
    var answer = numbers.map(num=>num.toString()).sort((a,b)=>(b+a) - (a+b)).join('');
    
    //모든 숫자가 0일 경우 '0'만 반환
    return answer[0] === '0'?'0':answer;
    return answer;
}