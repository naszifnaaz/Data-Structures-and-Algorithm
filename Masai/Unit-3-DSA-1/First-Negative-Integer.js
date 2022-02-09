/*
https://oj.masaischool.com/contest/2947/problem/02
*/


function firstNegativeInteger(n,k,arr)
{
    //Sliding window
    var bag = "";
    var flag = false;
    
    for(let i = 0; i < k; i++)
    {
        if(arr[i] < 0)
            bag += arr[i] + " ";
    }

    for(let i = k-1; i < n; i++)
    {
        flag = false;
        if(arr[i] < 0)
            flag = true;      
    }
    if(flag == true)
        bag +

    console.log(bag);
}


//Sample Input
var n = 5;
var k = 2;
var arr = [-8,2,3,-6,10];

firstNegativeInteger(n,k,arr);