/*
https://oj.masaischool.com/contest/2906/problem/05
*/

function nextGreaterElement(N,arr)
{
    var stack = [];
    var ans = [];

    //Reversing array, since we need greater element
    var arr = arr.reverse();
    console.log(arr);

    for(let i = 0; i < N; i++)
    {
        while(stack.length != 0 && stack[stack.length - 1] <= arr[i])
            stack.pop();
        
        if(stack.length == 0)
            ans[i] = -1;
        else
            ans[i] = stack[stack.length-1];
        
        stack.push(arr[i]);
    }

    console.log(ans.reverse());
}



//Sample Input
var N = 5;
var arr = [1,1,2,4,3];
nextGreaterElement(N,arr);