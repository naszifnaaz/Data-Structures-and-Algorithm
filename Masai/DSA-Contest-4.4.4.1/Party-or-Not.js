/*
https://oj.masaischool.com/contest/3358/problem/09
*/

function partyOrNot(n, c, r, arr) {
    let sum = 0;

    arr.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < c; i++)
        sum += arr[i];

    if (r >= sum)
        console.log('Party');
    else
        console.log('Sad');
}


//Sample Input
let n = 5;
let c = 3;
let r = 24;
let arr = [6, 4, 21, 20, 13];
partyOrNot(n, c, r, arr);