/*
https://oj.masaischool.com/contest/3018/problem/06
*/

function recursiveBubbleSort(n,arr)
{
    if(n == 1)
        return;
    else
    {
        for(let i = 0; i < n - 1; i++)
        {
            if(arr[i] > arr[i + 1])
                swap(i,i+1,arr);
        }
        recursiveBubbleSort(n-1,arr);

    }
        
}

function swap(start,end,arr)
{
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}
//Sample Input
var n = 5;
var arr = [3,5,0,9,8];
recursiveBubbleSort(n,arr);
console.log(arr.join(" "));