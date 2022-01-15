/*
https://oj.masaischool.com/contest/2473/problem/2
*/

function averageOfAll(size, arr)
{
    var avg = 0;
    var sum = 0;
    for(let i = 0; i < size; i++)
        sum += arr[i];
    
    avg = Math.ceil(sum/size);
    console.log(avg);
}

//Sample Input
var size = 4;
var arr = [2,5,0,9];
averageOfAll(size,arr);