function solution(survey, choices) {

    var answer = '';
    // survey 쪼개서 chocies 점수 할당하기
    let arr = {'R':0, 'C':0, 'J':0, 'A':0}
  
    survey.forEach((value, index)=>{
        //value 두번째 값이 무엇이냐에 따라 점수 지정
        if(value[1]==='R'||value[1]==='C'||value[1]==='J'||value[1]==='A') arr[value[1]]+=(Number(choices[index])-4)
        else arr[value[0]]-=(Number(choices[index])-4)
    })
    
    const result = Object.entries(arr).map(([key, value]) => {
  if (value < 0) {
    // value가 음수일 때 변환
    switch (key) {
      case 'R': return 'T';
      case 'C': return 'F';
      case 'J': return 'M';
      case 'A': return 'N';
    }
  } else {
    // value가 양수 또는 0일 때 그대로 사용
    return key;
  }
});
    

    return result.join('');
}