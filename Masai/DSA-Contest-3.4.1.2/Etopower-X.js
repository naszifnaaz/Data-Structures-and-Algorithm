/*
https://oj.masaischool.com/contest/3018/problem/04
*/

function eto(x,n)
{
    if(n == 0)
        return 1;
    else
    {
        let fr = (x ** n) / factorial(n);
        return eto(x,n-1) + fr;
    }
}

function factorial(n)
{
    if(n == 0)
        return 1;
    else
        return n * factorial(n-1);
}


//Sample Input
let ans = eto(4,2);
console.log(ans.toFixed(4));
