/*
https://oj.masaischool.com/contest/3035/problem/01
*/


function binaryEquivalent(n)
{
    if(n == 0)
        return 0;
    else
    {
        let bag = "";
        bag +=  binaryEquivalent(Math.floor(n / 2)) + n % 2;
        return bag;
    }
}


//Sample Input
let ans = binaryEquivalent(15);
console.log(ans);
ans = binaryEquivalent(128);
console.log(ans);