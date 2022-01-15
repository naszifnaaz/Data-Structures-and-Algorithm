/*
https://oj.masaischool.com/contest/2498/problem/202
*/

function encryptionScheme(size,arr)
{
    var sum = 0;
    for(let i = 0; i < size; i++)
    {
        if(arr[i] == 0)
            sum += (i + 1);
    }
    console.log(sum);
}

//Sample Input
var size = 5;
var arr = [1,0,0,1,1];
encryptionScheme(size,arr);