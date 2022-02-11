/*
https://oj.masaischool.com/contest/3000/problem/05
*/

function santhoshAndProfit(n)
{
    if(n == 0)
        return 1;
    else if(n < 0)
        return 0;
    else
        return santhoshAndProfit(n-4) + santhoshAndProfit(n-8);
}

//Sample Input
var ans = santhoshAndProfit(12);
console.log(ans);