/*
https://oj.masaischool.com/contest/3018/problem/04
*/


function etoPowerX(n,x)
{
    if(n == 0)
        return 1;
    else
    {
        let value = Math.pow(n,x);
        let ans = value/factorial(x) + etoPowerX(n,x-1);
        return ans;
    }
}

function factorial(n)
{
    console.log(n);
    if(n == 0 || n == 1)
        return 1;
    else if(n < 0)
        return 0;
    else
        return n * factorial(n - 1);
}

//Sample input
var n = 4;
var x = 2;
var ans = etoPowerX(n,x);
console.log(ans);
