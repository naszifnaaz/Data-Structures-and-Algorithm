/*
https://oj.masaischool.com/contest/3000/problem/03
*/

function powerFunction(a,b)
{
    if(b == 0)
        return 1;
    else
        return powerFunction(a,b-1) * a;
}

//Sample Input
let ans = powerFunction(2,4);
console.log(ans);