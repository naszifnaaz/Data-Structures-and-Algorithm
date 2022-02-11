/*
https://oj.masaischool.com/contest/2982/problem/01
*/


function factorial(n)
{
    if(n == 0 || n == 1)
        return 1;
    else
        return n * factorial(n-1);
}

//Sample Input
let ans = factorial(5);
console.log(ans);