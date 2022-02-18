/*
https://oj.masaischool.com/contest/3057/problem/03
*/

function ways(w,n,arr,depth)
{
    if(w == 0 && max == -1)
    {
        max = depth;
        min = depth;
        return;
    }

    else if(w == 0 && depth > max)
        max = depth;
    
    else if(w == 0 && depth < min)
        min = depth;
    
    if(w < 0)
        return;
    
    for(let i = 0; i < n; i++)
        ways(w-arr[i],n,arr,depth+1);
}


//Sample Input
let w = 3;
let n = 3;
let arr = [1,2,3];

let depth = 0;
let min = -1;
let max = -1;

ways(w,n,arr,depth);

if(max == -1)
    console.log(max);
else
    console.log(min,max);