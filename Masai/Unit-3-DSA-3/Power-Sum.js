/*
https://oj.masaischool.com/contest/3071/problem/04
*/

function power(num , n)
{
    if (n == 0)
        return 1;
    else if (n % 2 == 0)
        return power(num, parseInt(n / 2)) * power(num, parseInt(n / 2));
    else
        return num * power(num,parseInt(n / 2)) * power(num, parseInt(n / 2));
}

//Sample Input
let num = 10;
let n = 2;
let ans = power(num,n);
console.log(ans);