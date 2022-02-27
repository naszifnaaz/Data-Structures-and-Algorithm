/*
https://oj.masaischool.com/contest/3104/problem/03
*/

function birthdayShopping(n,k,arr,current)
{
    if(arr.length == k)
    {
        console.log(arr.join(" "));
        return;
    }

    for(let i = current; i <= n; i++)
    {
        arr.push(i);
        birthdayShopping(n,k,arr,i+1);
        arr.pop();
    }
}

//Sample Input
let n = 4;
let k = 2;
let arr = [];
let current = 1;
birthdayShopping(n,k,arr,current);