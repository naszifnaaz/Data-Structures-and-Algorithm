/*
https://oj.masaischool.com/contest/2967/problem/04
*/

function competeWithNeighbour(n,arr)
{
    var count = 0;

    for(let i = 0; i < n; i++)
    {
        //first element in the array
        if(i == 0)
        {
            if(arr[i] > arr[i + 1])
                count++;
        }

        //last element of the array
        if(i == n - 1)
        {
            if(arr[i] > arr[i - 1])
                count++;
        }
        if(arr[i] > arr[i + 1] && arr[i] > arr[i - 1])
        {
            console.log(arr[i-1],arr[i],arr[i+1]);
            count++;
        }
    }
    console.log(count);
}

//Sample Input
var n = 8;
var arr = [1,2,3,4,2,1,6,5];
competeWithNeighbour(n,arr);