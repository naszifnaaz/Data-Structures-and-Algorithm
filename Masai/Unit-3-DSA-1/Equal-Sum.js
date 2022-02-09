/*
https://oj.masaischool.com/contest/2947/problem/04
*/

function equalSum(a,b,c,d)
{
    if((a + b == c + d) || (a + c == b + d) || (a + d == b + c))
        console.log("Yes");
    else
        console.log("No");
}


//Sample Input
equalSum(1,8,4,11);
