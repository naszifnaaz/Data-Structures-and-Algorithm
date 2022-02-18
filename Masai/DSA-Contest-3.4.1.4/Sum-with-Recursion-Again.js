/*
https://oj.masaischool.com/contest/3042/problem/05
*/

function absoluteSum(n,arr)
{
    if(n == 0 || n == 1)
        return 0;
    
    let sum = Math.abs(arr[n-1] - arr[n-2]);
    return absoluteSum(n-1,arr) + sum;
}

//Sample Input
let n = 5;
let arr =[3,5,6,1,8];
let ans = absoluteSum(n,arr);
console.log(ans);