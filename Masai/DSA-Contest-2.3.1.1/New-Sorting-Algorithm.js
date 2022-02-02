/*
https://oj.masaischool.com/contest/2780/problem/04
*/

function newSortingAlgorithm(size,k,arr)
{
    var new_arr = [];

    for(let i = 0; i < size; i++)
        new_arr[i] = arr[i] % k;
    
    //Bubble Sort
    for(let i = 0; i < size; i++)
    {
        for(let j = 0; j < size - 1- i; j++)
        {
            if(new_arr[j] > new_arr[j+1])
            {
                swap(j,j+1,new_arr);
                swap(j,j+1,arr);
            }
        }
    } 
    console.log(arr.join(" ")); 
}

//Swap Function
function swap(start,end,arr)
{
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

//Sample Input
var size = 5;
var k = 6;
var arr =[12,18,17,65,46];
newSortingAlgorithm(size,k,arr);