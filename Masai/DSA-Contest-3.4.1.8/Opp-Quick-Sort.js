/*
https://oj.masaischool.com/contest/3122/problem/04
*/

function quickSort(arr,low,high)
{
    if(arr.length > 1)
    {
        let index = partition(arr,low,high);

        if(low < index - 1)
            quickSort(arr,low,index-1);
        
        if(index < high)
            quickSort(arr,index,high);
    }
}

function partition(arr,left,right)
{
    let pivot = arr[Math.floor(Math.random()*(right-left+1)+left)];

    while(left <= right)
    {
        {
            while(arr[left] > pivot)
                left++;
            
            while(arr[right] < pivot)
                right--;
        }

        if(left <= right)
        {
            swap(arr,left,right);
            left++;
            right--;
        }
    }
    return left;
}


function swap(arr,start,end)
{
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}


//Sample Input
let arr = [2,3,1,4,5];
let n = 5;
quickSort(arr,0,n-1);
console.log(arr);