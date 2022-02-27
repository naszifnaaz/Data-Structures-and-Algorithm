/*
https://oj.masaischool.com/contest/3122/problem/02
*/

function mergeSort(arr,low,high)
{
    if(low == high)
        return;
    
    let mid = Math.floor((low+high)/2);
    mergeSort(arr,low,mid);
    mergeSort(arr,mid+1,high);
    merge(arr,low,high,mid);
}

function merge(arr,low,high,mid)
{
    let arr1 = [];
    let arr2 = [];
    let left = 0;
    let right = 0;
    let index = low;

    for(let i = low; i <= mid; i++)
        arr1.push(arr[i]);
    
    for(let i = mid+1; i <= high; i++)
        arr2.push(arr[i]);
    
    while(left < arr1.length && right < arr2.length)
    {
        if(arr1[left] >= arr2[right])
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
let arr = [2,3,1,4,5];
let n = 5;
mergeSort(arr,0,n-1);
console.log(arr);