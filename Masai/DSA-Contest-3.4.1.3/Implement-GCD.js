/*
https://oj.masaischool.com/contest/3035/problems
*/

function gcd(a,b)
{
    //if both numbers are equal, then it itself is the gcd
    if(a == b)
        return a;
    
    //if any of the number is 1, then 1 is the gcd
    if(a == 1 || b == 1)
        return 1;
    
    else if(a > b)
        return gcd(a-b,b);
    
    else
        return gcd(a,b-a);
}


//Sample Input
let ans = gcd(6,9);
console.log(ans);
ans = gcd(2,25);
console.log(ans);