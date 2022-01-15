/*
https://oj.masaischool.com/contest/2519/problem/3
*/

function applyBasicMaths(size,arr)
{
    var sum = 0;
    var index = -1;
    var min = Infinity;

    //Find the sum of entire array
    for(let i = 0; i < size; i++)
    {
        sum += arr[i];
    }

    //finding the index of smallest element, that when removed the sum is divisible by 7
    for(let i = 0; i < size; i++)
    {
        if((sum - arr[i]) % 7 == 0)
        {
            if(arr[i] < min)
            {
                min = arr[i];
                index = i;
            }
                
        }
    }
    console.log(index);
}


//Sample Input
var size = 5;
var arr = [14,7,8,2,4];
applyBasicMaths(size,arr);