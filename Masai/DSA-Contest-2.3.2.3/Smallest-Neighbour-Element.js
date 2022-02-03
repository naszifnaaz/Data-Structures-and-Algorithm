/*
https://oj.masaischool.com/contest/2835/problems
*/

function smallestNeighbourElement(n,arr)
{
    var stack = [];
    var ans = [];

    for(let i = 0; i < n; i++)
    {
        while(stack.length != 0 && stack[stack.length-1] >= arr[i])
            stack.pop();
        
        if(stack.length == 0)
            ans[i] = -1;
        else
            ans[i] = stack[stack.length-1];

        stack.push(arr[i]);
    }
    console.log(ans.join(" "));
}

//Sample Input
var n = 8;
var arr = [39,27,11,4,24,32,32,1];
smallestNeighbourElement(n,arr);