/*
https://oj.masaischool.com/contest/2749/problem/02
*/

function subarrayAndSum(size,k,arr)
{
    var start = -1;
    var end = 0;
    var count = 0;
    var length = 0;
    var sum = 0;

    //find index first and last index of elements not divisble by k
    for(let i = 0; i < size; i++)
    {
        if(arr[i] % k != 0)
        {
            if(start == -1)
                start = i;
            end = i;    
        }
        sum += arr[i];
    }

    //if the entire array is not divisible by k, then it itself is the longest subarray not divisible by k of size array length and therefore count = 1
    if(sum % k != 0)
    {
        count = 1;
        length = size;
    }
    else
    {
        // find the length of the longest subarray that is not divisible by k
        start += 1;
        end = arr.length - end;
        length = arr.length - Math.min(start,end);
        
        //since we got the length, we can implement sliding window to find count
        sum = 0;

        //defining first window
        for(let i = 0; i < length; i++)
            sum += arr[i];
        
        if(sum % k != 0)
            count++;

        //implementing sliding window
        for(let i = length; i < size; i++)
        {
            sum += arr[i];
            sum -= arr[i - length];

            if(sum % k != 0)
                count++;
        }
    }
    console.log(count);
}


//Sample Input
var size = 4;
var k = 3;
var arr = [2,3,4,5];
subarrayAndSum(size,k,arr);

