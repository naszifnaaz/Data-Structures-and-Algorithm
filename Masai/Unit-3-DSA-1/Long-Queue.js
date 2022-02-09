/*
https://oj.masaischool.com/contest/2947/problem/01
*/

function longQueue(n,arr)
{
    var count = 1;
    var prev = arr[0];
    for(let i = 1; i < n; i++)
    {
        if(arr[i] < prev)
            count++;  
        prev = arr[i];    
    }
    console.log(count);
}


//Sample Input
var n = 6;
var arr = [1,2,4,3,5,8];
longQueue(n,arr);