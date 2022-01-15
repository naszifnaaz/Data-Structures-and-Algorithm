/*
https://oj.masaischool.com/contest/2473/problem/1
*/

function smallestAndLargest(size,arr)
{
    var max = -Infinity;
    var min = Infinity;

    for(let i = 0; i < size; i++)
    {
        if(arr[i] > max)
            max = arr[i];
        
        if(arr[i] < min)
            min = arr[i];
    }
    console.log(min);
    console.log(max);
}

//Sample Input
var size = 4;
var arr = [-2,0,8,4];
smallestAndLargest(size,arr);