/*
https://oj.masaischool.com/contest/2906/problem/01
*/

function minimumSum(N,K,arr)
{
    //Using Sliding Window Approch
    var sum = 0;
    var min = Infinity;

    //Defining a window
    for(let i = 0; i < K; i++)
        sum += arr[i];
    
    if(sum < min)
        min = sum;

    //Implementing Sliding window
    for(let i = K; i < N; i++)
    {
        sum += arr[i];
        sum -= arr[i - K];
        
        if(sum < min)
            min = sum;
    }
    console.log(min)
}


//Sample Input

var N = 5;
var K = 3;
var arr = [9,9,-5,9,5];
minimumSum(N,K,arr);