/*
https://oj.masaischool.com/contest/2473/problem/3
*/

function battleOfOddAndEven(size,arr)
{
    var oddSum = 0;
    var evenSum = 0;

    for(let i = 0; i < size; i++)
    {
        if(arr[i] % 2 == 0)
            evenSum += arr[i];
        else
            oddSum += arr[i];
    }

    if(oddSum > evenSum)
        console.log("Odd");
    else
        console.log("Even");
}


//Sample Input
var size = 5;
var arr = [1,2,3,4,5];
battleOfOddAndEven(size,arr);