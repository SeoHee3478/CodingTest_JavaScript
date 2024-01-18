//가로 세로 크기를 비교해서 큰 수를 가로로 위치 이동
//그 중에서 가로가 제일 큰 수, 세로가 제일 큰수를 구해서 곱하기
function solution(sizes) {
    var answer = 0;
    let sizeArr = [];
    for(let i = 0; i < sizes.length; i++){
        sizeArr.push(sizes[i].sort((a,b) => b-a));
    }

    let maxX = 0;
    let maxY = 0;
    for(let i = 0; i < sizeArr.length; i++){
        if(maxX < sizeArr[i][0]) maxX = sizeArr[i][0];
        if(maxY < sizeArr[i][1]) maxY = sizeArr[i][1];
    }
    return maxX * maxY;
}