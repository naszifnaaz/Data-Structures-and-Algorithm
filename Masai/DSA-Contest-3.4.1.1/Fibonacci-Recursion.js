/*
https://oj.masaischool.com/contest/2982/problem/03
*/

function fib(n)
{
    if(n == 0)
        return 0;
    else if(n == 1)
        return 1;
    else
        return fib(n - 1) + fib (n - 2);
}


//Sample Input
let ans = fib(4);
console.log(ans);