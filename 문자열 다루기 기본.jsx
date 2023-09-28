function solution(s) {
   if (s.length === 4 || s.length === 6){
       if (/^\d+$/.test(s))
       return true ;
   }
          return false ;
}
// 3항 연산자 사용
function solution(s) {
    if ((s.length === 4 || s.length === 6) && /^\d+$/.test(s)) {
     return true ;
}
 return false ;
}

// 1. 문자열 길이가 4혹은 6인지를 확인, 
// 2. 1번 조건이 참이면 문자열을 정규 표현식으로 숫자로만 이뤄졌는 지 판단 후, 참이면 true 반환.
// 3. 이외의 모든 케이스는 false 반환.

// --- 내 원형 코드
// function solution(s) {
//     let answer = '';
//    if (s.length === 4 || s.length === 6){
//        if (/^\d+$/.test(s))
//            answer = true;
//        return answer ;
//    }
//     else {
//     answer = false;
//           return answer ;
//     }
// }
// 원형 코드가 방향은 맞았지만 제대로된 반환값을 주지 못했던 이유.
// 문제의 원인은 코드에서 조건을 검사한 후 answer 변수에 값을 할당하고, 이후에 answer 변수를 반환하고 있는 부분입니다. 이로 인해 조건을 만족하지 않는 경우 answer에 false 값을 할당하고, 이후에도 true로 설정된 answer 값을 반환하게 됩니다. 이것이 코드가 제대로 작동하지 않는 이유입니다.
// 코드에서 answer 변수에 값을 할당하고, 이후에 조건에 상관없이 그 값을 반환하고 있기 때문에 원하는 결과를 얻을 수 없습니다. return 문은 함수를 즉시 종료하고 반환 값을 돌려주므로, 조건을 만족하지 않을 때 return false;가 실행되어야 올바른 결과를 얻을 수 있습니다. 코드를 수정하지 않으면 항상 return false;가 실행되지 않고, answer 변수에 할당된 값이 반환되므로 올바른 동작을 하지 않게 됩니다.
// -> 그래서 ""가 나왔구나! 
// 따라서 코드를 실행하는 동안 조건을 검사하고, 조건을 만족하지 않으면 즉시 false를 반환하고, 조건을 만족하면 true를 반환해야 합니다. 그렇게 하기 위해 코드를 수정한 것입니다.
// 또 다른 이유는 조건 검사에서 answer를 문자열로 초기화하고 있다는 점입니다. answer 변수는 불리언 값을 저장하는 변수여야 하지만, 문자열로 초기화되고 있습니다. 이로 인해 혼동이 생길 수 있습니다. 불리언 값을 반환해야 하므로, true 또는 false를 바로 반환하는 것이 더 명확하고 간단합니다.
