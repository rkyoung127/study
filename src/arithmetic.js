// 프로그래머스 코딩테스트 입문 사칙연산
// 두 수의 합, 차, 곱, 몫

function solution(num1, num2) {
    var answer = -1;
    answer = num1+num2
    return answer;
}

function solution(num1, num2) {
    var answer = 0;
    answer = num1-num2;
    return answer;
}

function solution(num1, num2) {
    var answer = 0;
    if (num1>=0 && num1<=100){
        if(num2>=0 && num2<=100){
            answer = num1 * num2;
        } else return false;
    } 
    return answer;
}

function solution(num1, num2) {
    var answer = 0;
    if (num1>0 && num1<=100){
        if(num2>0 && num2<=100){
            answer = Math.floor(num1 / num2);
        } else return false;
    } 
    return answer;
}