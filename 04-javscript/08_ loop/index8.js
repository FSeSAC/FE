// // // 반복문

// // // For 문
// // for (let i = 0; i < 10; i++) {
// //     // i가 0~9 총 10번 반복
// //     console.log('안녕', i);
// // }

// // // 1 ~ 5 출력
// // for (let i = 1; i < 6; i++) {
// //     console.log(i);
// // }
// // console.log('----------------------------');

// // // 5 ~ 1 출력
// // for (let i = 5; i >= 1; i--) {
// //     console.log(i);
// // }
// // console.log('----------------------------');

// // // 1부터 n까지의 합 구하기
// // let  n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
// // let sum = 0; // 합을 저장할 변수
// // for (let i = 0; i <= 10; i++) {
// //     sum = sum + i; // sum = 0+1;
// //     console.log(i, sum)
// // ;}

// // console.log(sum);
// // console.log('----------------------------');

// // // 1 ~ 20 까지의 숫자를 반복
// // // 현재 반복 숫자가 짝수라면 변수에 더하기
// // // for문 안에 if문 조합 해보세요

// // // 1 ~ 20 중에서 짝수 일 때의 합을 구하기


// // let nS = 20;
// // let sumS = 0;
// // for (let i = 0; i <= 20; i= i+2) {
// //     sumS = sumS + i;
// //     console.log(i, sumS);
// // }
// // console.log(sumS);

// // // for ~if 중첩
// // console.log('----------------------------');

// // // while 문
// // let idx = 0;
// // while (idx < 10) {
// //     console.log('안녕', idx);
// //     idx = idx + 1;
// // }

// // let idx2 = 0;
// // while(true) {
// //     // 의도적 무한 루프
// //     // 무한 루프 시, 브라우저 종료후 재실행
// //     console.log('안녕', idx2);
// //     idx2 = idx2 + 1;

// //     // 무한 루프 종료 조건
    

// // }

// console.log('------------- while 문 / 무한루프---------------');
// let i = 2, j = 1;

// while (i < 10) {
//     while(j < 10) {
//         console.log('---' + i + ' '+' 단' + '---')
//         console.log(i, "x", j, "=",  i*j);
//         j++;
//     }
//     i++;
//     j = 1;
// }


// ///////////////////////////////////////////////////////////////
// // do ~while문
// /**
//  * JS에서 사용되는 반복문 중 하나,
//  * 조건이 참인지 여부에 상관없이 코드 블록을 최소 한 번 실행한 후  조건 검사
//  *  => 항상 코드 블록을 한 번 실행한 다음, 조건이 참인 동안 반복
//  */

// // * 구문
// do {
//     // 실행할 코드 내용
// } while(조건);

// // ex)
// let g = 1;
// do {
//     console.log(g);
//     g++;
// } while(g <= 5);


// // ex 2)
// let num;

// do {
//     num  = parseInt(prompt('10보다 큰 숫자를 입력하세요'), 10);
// } while (num <= 10)
//     console.log('입력한 숫자: ', num);


// ///////////////////////////////////////////////////////////////
// # break & continue
//  - 반복문 중단

// # continue
//  - 현재 반복 중단 후, 다음 반복 진행

// ex)
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        // i가  5일 때 반복문 종료
        break;
    }
    console.log(i);
}
// 출력 결과 : 1, 2, 3, 4
console.log('----------------------------');

// ex 2)
for (let i = 0; i <= 5; i++) {
    if (i === 3) {
        // i가  3일 때 반복문 종료
        continue;
    }
    console.log(i);
} 