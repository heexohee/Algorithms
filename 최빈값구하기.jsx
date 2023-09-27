// 문제 설명
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 
// 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

function solution(arr) {
    // 배열 내 요소의 등장 횟수를 추적하기 위한 객체 생성
    const counts = {};

    // 배열 내 모든 요소의 등장 횟수를 센다
    for (const num of arr) {
        if (counts[num]) {
            counts[num]++;
        } else {
            counts[num] = 1;
        }
    }

    // 가장 많이 등장한 값들을 모은다
    let modes = [];
    let maxCount = 0;
    for (const num in counts) {
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            modes = [num];
        } else if (counts[num] === maxCount) {
            modes.push(num);
        }
    }

    // 최빈값 반환
    return modes.length === 1 ? parseFloat(modes[0]) : -1;
}

