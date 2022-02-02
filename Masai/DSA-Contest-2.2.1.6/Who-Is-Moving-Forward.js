/*
https://oj.masaischool.com/contest/2771/problem/05
*/

function goingForward(n,k,arr)
{
    var flag = arr[k-1];
    var count = 0;
    for(let i = 0; i < n; i++)
    {
        if(arr[i] >= flag && arr[i] > 0)
            count++;
    }
    console.log(count);
}


//Sample Input
var n = 8;
var k = 5;
var arr = [10,9,8,7,7,7,5,5];
goingForward(n,k,arr);