/*
https://oj.masaischool.com/contest/2814/problem/01
*/

function sortItOut(n,arr)
{
    var index = [];
    for(let i = 0; i < n; i++)
        index.push(i);

    //Bubble Sort
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n - 1 - i; j++)
        {
            if(arr[j] > arr[j + 1])
            {
                swap(j,j+1,arr);
                swap(j,j+1,index);
            }
        }
    }
    console.log(arr);
    console.log(index);
}

//Swap function
function swap(start,end,arr)
{
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

//Sample Input
var n = 5;
var arr = [4,5,3,7,1];
sortItOut(n,arr);
