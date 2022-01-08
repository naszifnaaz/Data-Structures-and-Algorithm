/*
https://oj.masaischool.com/contest/2780/problem/02
*/

function bubbleSort(N,arr)
{
    console.log(arr);

    //Bubble Sort
    for(let i = 0; i < N; i++)
    {
        for(let j = 0; j < N-i-1; j++)
        {
            if(arr[j] > arr[j + 1])
                swap(j, j+1, arr);
        }
    }
    console.log(arr);
}

//Swap Function
function swap(start,end,arr)
{
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}


//Sample Input
var size = 10;
var arr = [234, 43, 55, 63,  5, 6, 235, 547, 34, 12];
bubbleSort(size,arr);