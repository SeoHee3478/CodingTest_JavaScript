function solution(nums) {
var answer = 0;
// nums : 폰켓몬 종류번호 담긴 배열
// pickup = nums.length / 2 가 최대한 다양한 종류의 폰켓몬을 담을 배열
// 최대한 다양한 종류의 폰켓몬 담아야함
// 해시 접근 시 => 번호가 key, 번호폰켓몬개수 value
// 폰켓몬 종류번호 갯수 리턴 -> number
// 중복이 여러개다..
let pickup = nums.length / 2
const table = new Map()
// map이 하나의 객체 버킷? size == length

nums.forEach(num => {
if(table.get(num)){
// 해당하는 번호의 폰켓몬개수 value 추가 로직
table.set(num, table.get(num) + 1)
}else{
table.set(num, 1)
}
})

// 테이블 세팅 후 뽑는 갯수를 찾는 조건
if(table.size < pickup) {
answer = table.size
}else{
answer = pickup
}


return answer;

// set으로 풀어보자!
}