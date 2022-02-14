/*
https://oj.masaischool.com/contest/3042/problem/02
*/

function santhoshAndProfit(n,current)
{
    if(current == n)
        return 1;
    
    if(current > n)
        return 0;
    
    return santhoshAndProfit(n,current + 4) + santhoshAndProfit(n,current + 8);
}

//Sample Input
let ans = santhoshAndProfit(12,0);
console.log(ans);