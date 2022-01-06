/*
https://oj.masaischool.com/contest/2749/problem/01
*/

function twoSum(size,target,arr)
{
    var left = 0;
    var right = size-1;
    var flag = false;

    while(left < right)
    {
        //2 7 11 15   9
        var sum = arr[left] + arr[right];
        if(sum == target)
        {
            flag = true;
            break;
        }
        else if(sum > target)
            right--;
        
        else if(sum < target)
            left++;
    }

    if(!flag)
    {
        left = -1;
        right = -1;
    }
    console.log(left,right);
}

var size = 4;
var target = 9;
var arr = [2,7,11,15];

twoSum(size,target,arr);