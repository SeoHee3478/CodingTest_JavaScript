function solution(user_id, banned_id) {
    const resultSet = new Set(); // 중복 조합을 제거하기 위한 Set

    // 주어진 banned_id와 user_id로 매칭을 찾는 함수
    function findCombinations(used, depth, selected) {
        if (depth === banned_id.length) {
            resultSet.add(selected.sort().join(',')); // 정렬하여 중복 제거
            return;
        }

        for (let i = 0; i < user_id.length; i++) {
            if (used[i]) continue; // 이미 사용된 아이디는 건너뜀
            
            // banned_id와 user_id 매칭 확인
            if (isMatch(banned_id[depth], user_id[i])) {
                used[i] = true; // 현재 아이디 사용
                findCombinations(used, depth + 1, [...selected, user_id[i]]);
                used[i] = false; // 백트래킹
            }
        }
    }

    // 두 아이디가 매칭되는지 확인하는 함수
    function isMatch(banned, user) {
        if (banned.length !== user.length) return false;
        for (let i = 0; i < banned.length; i++) {
            if (banned[i] !== '*' && banned[i] !== user[i]) {
                return false;
            }
        }
        return true;
    }

    findCombinations(new Array(user_id.length).fill(false), 0, []);
    return resultSet.size; // 고유 조합의 수 반환
}

