function solution(n, times) {
    times.sort((a, b) => a - b); // times 배열을 오름차순으로 정렬
    let left = 1; // 최소 시간
    let right = n * times[times.length - 1]; // 최대 시간
    let answer = right; // 최소 시간을 저장할 변수
    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // 중간값 계산
        let count = 0; // 심사를 받을 수 있는 사람 수
        for (let i = 0; i < times.length; i++) {
            count += Math.floor(mid / times[i]); // 각 심사관이 심사할 수 있는 사람 수를 합산
            if (count >= n) break; // 모든 사람이 심사를 받을 수 있으면 반복문 종료
        }
        if (count >= n) { // 모든 사람이 심사를 받을 수 있으면
            answer = Math.min(answer, mid); // 최소 시간을 갱신
            right = mid - 1; // right를 mid - 1로 이동
        } else { // 모든 사람이 심사를 받을 수 없으면
            left = mid + 1; // left를 mid + 1로 이동
        }
    }
    return answer; // 최소 시간을 리턴
}