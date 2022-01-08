/*
https://oj.masaischool.com/contest/2780/problem/01
*/

function selectionSort(N,arr)
{
    var min = -1;
    console.log(arr);

    //Selection Sort
    for(let i = 0; i < N; i++)
    {
        min = i;
        for(let j = i + 1; j < N; j++)
        {
            if(arr[j] < arr[min])
                min = j;
        }
        swap(i,min,arr);
    }
    console.log(arr);
}

//Swap function
function swap(start,end,arr)
{
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

//Sample Input
var size = 10;
var arr = [234, 43, 55, 63,  5, 6, 235, 547, 34, 12];
selectionSort(size,arr);