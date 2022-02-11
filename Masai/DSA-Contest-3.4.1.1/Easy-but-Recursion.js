/*
https://oj.masaischool.com/contest/2982/problem/05
*/

function arraySum(n,arr)
{
    if(n == 0)
        return 0;
    else
        return arraySum(n-1,arr) + arr[n-1];
}


//Sample input
var n = 5;
var arr = [6,3,8,2,-4];
var ans = arraySum(n,arr);
console.log(ans);