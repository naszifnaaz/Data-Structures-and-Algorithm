/*
https://oj.masaischool.com/contest/3122/problem/03
*/

function quickSort(arr,low,high)
{
    if(low >= high)
        return;
    
    let index = partition(arr,low,high);
    quickSort(arr,low,index-1);
    quickSort(arr,index+1,high);
}

function partition(arr,low,high)
{
    let left = low;
    let right = high;

    let pivot = arr[low];

    while(left < right)
    {
        while(arr[left] <= pivot && left < high)
            left++;
        
        while(arr[right] >= pivot && right > low)
            right--;
        
        if(left < right)
            swap(arr,left,right);
    }

    swap(arr,low,right);
    return right;
}

//Swap Function
function swap(arr,start,end)
{
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}


//Sample Input
let arr = [3,5,0,9,8];
let n = 5;
quickSort(arr,0,n-1);
console.log(arr);