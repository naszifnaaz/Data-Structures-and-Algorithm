/*
https://oj.masaischool.com/contest/2938/problem/03
*/

function nextGreaterElement(n,arr)
{
    let stack = [];
    let ans = [];

    for(let i = n -1; i >= 0; i--)
    {
        while(stack.length != 0 && arr[i] > stack[stack.length-1])
            stack.pop();
        
        if(stack.length == 0)
            ans[i] = -1;
        else
            ans[i] = stack[stack.length - 1];
        
        stack.push(arr[i]);
    }

    console.log(ans.join(" "));

}

//Sample Input
var n = 5;
var arr = [1,4,3,5,2];
nextGreaterElement(n,arr);