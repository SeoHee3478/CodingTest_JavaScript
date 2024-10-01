// function solution(s) {
// //     var answer = '';
// //     let arr = ['zero', 'one', 'two', 'three', 'four','five', 'six', 'seven', 'eight', 'nine']
// //     let i = 0;
// //     while(s.length>i){
// //         // s의 문자열의 값이 문자라면
// //         if(typeof s[i] == 'string'){
// //             // 문자열과 첫번째 단어가 일치하는 단어를 보관하는 변수
           
// //             let tempSelectedArray = [];
// //             // 각각의 숫자에 대응되는 영단어 표를 순회하면서 s의 문자열과 첫번째 문자가 일치하는 단어 변수에 담기
// //             arr.forEach((value, index)=>{
// //                 if(value[0]===s[i]){
// //                      tempSelectedArray.push([value, index])
// //                     console.log(tempSelectedArray.length)
// //                 }
// //                 // 일치하는 영단어가 하나라면
                
// //                 if(tempSelectedArray.length===1){
// //                     // 영단어를 숫자로 바꾸기
// //                     answer+= String(tempSelectedArray[0][1])
// //                     // 영단어 길이만큼 i 값 더하기
// //                     i += tempSelectedArray[0][0].length
// //                     console.log(i, answer, tempSelectedArray)
// //                 }
// //                 // 두번째 문자도 비교해서 필요없는 문자 빼기  
                                  
// //              })
    
// //          // 그냥 숫자라면   
// //         } else if(typeof s[i] == 'number'){
// //             answer += String(s[i])
// //         }
// //         i++
// //     }
// //     return answer;
    
// }

function solution(s) {
let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
numbers.forEach((i,idx)=>s=s.replaceAll(i,idx))
return Number(s);
}