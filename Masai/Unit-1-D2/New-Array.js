/*
https://oj.masaischool.com/contest/2543/problem/102
*/

function niceArray(size,arr,target)
{
    var count = 0;
    for(let i = 0; i < size; i++)
    {
        if(arr[i] % 2 != 0)
            count++;
    }

    if(count > target)
        console.log("Nice Array");
    else
        console.log("Bad Array");
}

//Sample Input
var size = 5;
var arr = [1,2,3,4,5];
var target = 3;
niceArray(size,arr,target);