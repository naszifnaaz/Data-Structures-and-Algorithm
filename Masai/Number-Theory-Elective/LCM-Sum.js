/*
https://oj.masaischool.com/contest/2914/problem/2
*/

function lcmSum(n)
{
    var sum = 0;
    for(let i = 1; i <= n; i++)
    {
        var divisor = greatestCommonDivisor(i,n);
        sum += (i * n) / divisor;
    }
    console.log(sum);
}

//Finding greatest common divisor
function greatestCommonDivisor(a,b)
{
    if(a == b)
        return a;
    
    else if (a > b)
        return greatestCommonDivisor(a-b,a);
    else
        return greatestCommonDivisor(a,b-a);
}


//Sample Input
var n = 5;
lcmSum(n);