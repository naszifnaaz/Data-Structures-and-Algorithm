/*
https://oj.masaischool.com/contest/2852/problem/01
*/
function SNEModified(n,arr)
{
    var stack = [];
    var count = 0;

    for(let i = 0; i < n; i++)
    {
        while(stack.length != 0 && stack[stack.length-1] >= arr[i])
            stack.pop();
        
        if(stack.length == 0)
            count++;
        
        stack.push(arr[i]);
    }

    console.log(count);
}

//Sample Input
var n = 8;
var arr = [39,27,11,4,24,32,32,1];
SNEModified(n,arr);