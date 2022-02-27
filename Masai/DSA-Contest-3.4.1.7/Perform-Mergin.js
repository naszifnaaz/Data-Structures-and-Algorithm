/*
https://oj.masaischool.com/contest/3104/problem/01
*/

function performMerging(arr1,arr2,n)
{
    let left = 0;
    let right = 0;
    let index = 0;

    while(left < arr1.length && right < arr2.length)
    {
        if(arr1[left] < arr2[right])
        {
            arr[index] = arr1[left];
            left++;
        }
        else
        {
            arr[index] = arr2[right];
            right++;
        }
        index++;
    }

    while(left < arr1.length)
    {
        arr[index] = arr1[left];
        left++;
        index++;
    }

    while(right < arr2.length)
    {
        arr[index] = arr2[right];
        right++;
        index++;
    }
}

//Sample Input
let arr1 = [1,5,7,9];
let arr2 = [2,4,6,8];
let arr = [];
let n = 4;
performMerging(arr1,arr2,n);
console.log(arr);