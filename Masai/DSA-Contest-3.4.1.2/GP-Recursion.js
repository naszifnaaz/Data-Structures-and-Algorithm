/*
https://oj.masaischool.com/contest/3018/problem/01
*/

function gp(n,r)
{
    if(n == 0)
        return 1;
    else
    {
        let fr = 1 / r ** n;
        return gp(n-1,r) + fr;
    }
}


//Sample Input
let ans = gp(3,5);
console.log(ans.toFixed(4));