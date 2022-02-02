/*
https://oj.masaischool.com/contest/2814/problem/03
*/

function sumOfDigits(n,arr)
{
    var digit = 0;
    for(let i = 0; i < n; i++)
    {
        while(arr[i] != 0)
        {
            digit += arr[i] % 10;
            arr[i] = Math.floor(arr[i] / 10);
        }
    }
    console.log(digit);
}

//Sample Input
var n = 5;
var arr = [12,14,16,17,29];
sumOfDigits(n,arr);