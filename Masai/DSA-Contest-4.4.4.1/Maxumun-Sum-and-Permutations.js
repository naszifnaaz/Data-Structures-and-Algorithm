/*
https://oj.masaischool.com/contest/3358/problem/06
*/

function maximumSum(n, arr) {
    arr.sort(function (a, b) {
        return a - b;
    });

    let sum = 0;

    for (let i = 0; i < arr.length; i++)
        sum += (arr[i] * i);

    console.log(sum);
}

//Sample Input
let n = 5;
let arr = [2, 5, 1, 6];
maximumSum(n, arr);