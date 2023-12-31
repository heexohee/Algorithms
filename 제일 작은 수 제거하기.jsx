// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

function solution(arr) {
    if (arr.length === 1) {
    return [-1];
  }
    else {
    let min = Math.min(...arr); // 배열에서 가장 작은 값을 찾아서 min에 담음.
    let result = arr.filter((element) => element !== min); // 가장 작은 값을 제외한 요소로 새로운 배열 생성(filter로 찾음)
    return result;
  }
}


// 1. 정수만 들어 있는 배열 arr에서, 가장 작은 수를 제거할 것. (단, 배열에 인덱스가 [0]이라 요소가 하나만 있는 경우 [-1]을 리턴할 것.) -> 배열의 길이가 1일 경우 무조건 [-1]를 반환하도록 처리 함.
// 2. 가장 작은 정수를 찾아서, filter 메서드를 사용해서 해당 정수만을 제외한 배열을 반환한다. 

// 오름차순 해서 첫번째 요소를 뺄까? 그렇게 되면 원래 배열안의 요소 순서가 달라지니까... 안될 듯
// 맨 첫번째 요소와 비교해서 가장 작은 숫자를 반환?
//  ->  배열을 순환하면서 가장 작은 숫자를 찾는 것은 매우 비가독성적/비효율적, 메서드를 사용하자.

//---

// 타인 풀이
// 1. splice로 해당 인덱스의 요소를 제거.
// 2. indexOf를 사용하면 해당 요소와 일치하는 요소의 배열을 찾아준다.
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if (arr.length<1) {
        return[-1];
    }
    return arr;
}
