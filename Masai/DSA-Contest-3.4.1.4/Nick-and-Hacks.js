/*
https://oj.masaischool.com/contest/3042/problem/01
*/

function nickAndHacks(n,current)
{
    if(current == n)
        return true;
    
    if(current > n)
        return false;
    
    return nickAndHacks(n, current * 10) || nickAndHacks(n, current * 20);
}


//Sample Input
let n = 200;
let ans = nickAndHacks(n,1);
console.log(ans);

n = 25;
ans = nickAndHacks(n,1);
console.log(ans);

