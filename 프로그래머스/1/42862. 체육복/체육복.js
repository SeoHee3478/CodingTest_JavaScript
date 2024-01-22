function solution(n, lost, reserve) {
	// 학생들의 체육복 상태를 나타내는 배열 초기화
	let clothes = new Array(n).fill(1);
	// 체육복을 도난당한 학생들 처리
	for (let l of lost) {
	    clothes[l-1] -= 1;
	}
	
	// 여벌의 체육복을 가진 학생들 처리
	for (let r of reserve) {
	    clothes[r-1] += 1;
	}
	
	// 체육복을 빌려줄 수 있는 경우 확인
	for (let i = 0; i < n; i++) {
	    if (clothes[i] === 0) {
	        // 앞번호 학생에게 체육복 빌리기
	        if (i > 0 && clothes[i-1] === 2) {
	            clothes[i] = 1;
	            clothes[i-1] = 1;
	        }
	        // 뒷번호 학생에게 체육복 빌리기
	        else if (i < n-1 && clothes[i+1] === 2) {
	            clothes[i] = 1;
	            clothes[i+1] = 1;
	        }
	    }
	}
	
	// 체육수업을 들을 수 있는 학생 수 카운트
	let count = 0;
	for (let c of clothes) {
	    if (c > 0) {
	        count += 1;
	    }
	}
	
	return count;
}