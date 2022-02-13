/*
https://oj.masaischool.com/contest/2982/problem/04
*/

function numberOfWays(n)
{
    if(n == 0)
        return 1;
    else if(n < 0)
        return 0;
    else
        return numberOfWays(n - 1) + numberOfWays(n - 2) + numberOfWays(n - 3);
}


//Alternate using current
function alternateWays(n,current)
{
    if(current == n)
        return 1;
    
    if(current > n)
        return 0;
    
    return alternateWays(n,current+1) + alternateWays(n,current+2) + alternateWays(n,current+3);
}

//Sample Input
var ans = numberOfWays(4);
console.log(ans);

ans = alternateWays(4,0);
console.log(ans);