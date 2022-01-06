/*
https://oj.masaischool.com/contest/2749/problem/03
*/

function takeOutMaximum(size,k,arr)
{
    //Using Sliding Window Technique
    var sum = 0;
    var max = 0;

    //defining a window
    for(let i = 0; i < k; i++)
        sum += arr[i];
    
    max = sum;

    //implementing sliding window
    for(let i = k; i < size; i++)
    {
        //adding one digit to right
        sum += arr[i];

        //removing one digit from left
        sum -= arr[i-k];

        //finding max
        if(sum > max)
            max = sum;
    }
    console.log(max);
}

var size = 10;
var k = 3;
var arr =[-1,-1,-2,1,-2,4,1,9,3,9];

takeOutMaximum(size,k,arr);