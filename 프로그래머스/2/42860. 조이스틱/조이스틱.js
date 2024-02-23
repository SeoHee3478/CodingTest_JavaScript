// 1. 문자열을 하나씩 순회하면서 해당 문자열 순서대로 조이스틱 움직인 횟수 기록하기
// 2. 문자열 사이에 A가 있다면, A를 제외한 그 다음 문자열(문자열 위치 기억하기)에 도달하는데 정방향, 역방향 중에서 더 가까운 방향으로 선택해서 가기
// 3. 조이스틱으로 알파벳 이미 설정된 부분은 체크하기
// 4. 조이스틱 움직인 횟수 기록하기
function solution(name) {
//     var answer = 0;
    
//     let moveCountSum = 0;
//     let makeName = Array(name.length).fill("");
//     let nameCount = Array(name.length).fill(0); // 0일땐 순회하지 않은 문자열, 1일땐 순회한 문자열
    
//     console.log(nameCount)
    
//     console.log(name[0].charCodeAt(0)-'A'.charCodeAt(0))
    
//     let nameIndex = 0;
//     while(nameIndex<name.length){ 
        // if(name[nameIndex] !== 'A'){
            // let moveCount = name[nameIndex].charCodeAt(0)-'A'.charCodeAt(0);
            // moveCountSum += moveCount;
            // nameCount[nameIndex] = 1;
            // makeName[nameIndex] = name[nameIndex];
            
        // }
        // let moveCount = name[nameIndex].charCodeAt(0)-'A'.charCodeAt(0);
        // console.log(nameIndex, name[nameIndex],  moveCount)
        // moveCountSum += moveCount;
        // console.log('1', moveCountSum)
        // nameIndex++;
        // moveCountSum += 1;
        // console.log('2', moveCountSum)
//         else if(name[nameIndex] === 'A'){
            
//         }
       let answer = 0;
  let min_move = name.length - 1;

  [...name].map((n, i) => {
    answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
    let idx = i + 1;

    // 연속되는 A의 개수 count
    while (idx < name.length && name[idx] === 'A') {
      idx++;
    }

    min_move = Math.min(
      min_move,
      i * 2 + name.length - idx,
      i + 2 * (name.length - idx),
    );
  });

  return answer + min_move;
}