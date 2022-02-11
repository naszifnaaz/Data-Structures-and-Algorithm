/*
https://oj.masaischool.com/contest/3018/problem/02
*/

function beyondFactorial(n)
{
    if(n == 0 || n == 1)
        return 0;
    else
        return Math.log(n) + beyondFactorial(n-1);
}



//Sample Input
var ans = beyondFactorial(3);
ans = ans.toFixed(4);
console.log(ans);

