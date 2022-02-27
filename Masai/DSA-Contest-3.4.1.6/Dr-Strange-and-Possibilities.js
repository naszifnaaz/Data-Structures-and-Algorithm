/*
https://oj.masaischool.com/contest/3085/problem/05
*/

function drStrange(arr,new_arr,n,current)
{
    console.log(new_arr.join(" "));

    if(current == n)
        return;
    
    for(let i = current; i < n; i++)
    {
        new_arr.push(arr[i]);
        drStrange(arr,new_arr,n,i+1);
        new_arr.pop();
    }
}

//Sample Input
let n = 3;
let arr = [];
let current = 0;
let new_arr = [];

for(let i = 1; i <= n; i++)
    arr.push(i);

drStrange(arr,new_arr,n,current);