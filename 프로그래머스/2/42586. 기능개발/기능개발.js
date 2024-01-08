//진도가 100%일 때 서비스에 반영
//뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포
//return 각 배포마다 몇 개의 기능이 배포되는지를

// curProg = [93, 30, 55];
// 하루가 지날 때 마다 curProg에 speed만큼 값을 더함
// 1일차 = [93, 30, 55]
// 2알차 = [94, 60, 60] ...
// N일차 = [100, 240, 90]

// (100 - progresses[i])/speeds[i]
// days = [ 3, 5, 9]

// answer = []

// stack = [days[0]];
// days.shift();
// if(stack[0] >= days[i+1]) stack.push(days[i+1]), days.shift();
// if(stack[0] < days[i+1]) break;
// answer.push(stack.length)

// i < i+1

// if(curProg[0] >= 100)
// curProg filter 100이 넘는 값을 반환 = [100, 240] length 2

function solution(progresses, speeds) {
var answer = [];

let days = [];
for(let i = 0; i<progresses.length;i++){
days.push(Math.ceil((100-progresses[i])/speeds[i]))
}

while(days.length){
let stack = [days[0]];

for(let i = 1 ; i < days.length; i++){
if(stack[0] >= days[i]) {[]
stack.push(days[i]);
}else{
break;
}
}

answer.push(stack.length);
days = days.slice(stack.length);

}
return answer;
}