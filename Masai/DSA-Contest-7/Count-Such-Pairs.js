/*
https://oj.masaischool.com/contest/2536/problem/4
*/

function countSuchPairs(size,target,arr)
{
    var count = 0;
    for(let i = 0; i < size; i++)
    {
        for(let j = i + 1; j < size; j++)
        {
            if(arr[i] + arr[j] == target)
                count++;
        }
    }
    console.log(count);
}


//Sample Input
var size = 5;
var target = 9;
var arr =[3,0,6,2,7];
countSuchPairs(size,target,arr);