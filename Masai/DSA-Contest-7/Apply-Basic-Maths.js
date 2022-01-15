/*
https://oj.masaischool.com/contest/2536/problem/3
*/

function applyBasicMaths(size,arr)
{
    var min = Infinity;
    var index = -1;
    var sum = 0;
    //Find sum of all elements
    for(let i = 0; i < size; i++)
        sum += arr[i];
    
    //Find the index of the smallest element which when substracted is divisible by 7
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