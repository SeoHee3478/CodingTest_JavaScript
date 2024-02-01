// [2, 11, 14, 17, 21]
// [2, 9, 3, 3, 4, 4] 값이 큰 순서대로 빼기
// [11, 6, 4, 4] //4
function solution(distance, rocks, n) {
    rocks.push(distance);
    rocks.sort((a, b) => a - b);

    let left = 1;
    let right = distance;
    let answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let prev = 0;
        let removeCount = 0;

        for (let i = 0; i < rocks.length; i++) {
            if (rocks[i] - prev < mid) {
                removeCount++;
            } else {
                prev = rocks[i];
            }
        }

        if (removeCount > n) {
            right = mid - 1;
        } else {
            left = mid + 1;
            answer = mid;
        }
    }
    return answer;
}
