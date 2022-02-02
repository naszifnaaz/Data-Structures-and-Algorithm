/*
https://oj.masaischool.com/contest/2822/problems
*/


var stack = [];
var top = -1;

function stackOperations(n,arr)
{
    for(let i = 0; i < n; i++)
    {
        //Push Operation
        if(arr[i][0] == 1)
        {
            
            stack[++top] = arr[i][1];
        }

        //Pop Operation
        if(arr[i][0] == 2)
        {
            if(top == -1)
                console.log("Empty!")
            else
                top--; 
        }

        //Peek Operation
        if(arr[i][0] == 3)
        {
            if(top == -1)
                console.log("Empty!");
            else
                console.log(stack[top]);
        }

    }
}

//Sample Input
var n = 6;
var arr = [[1,15],[1,20],[2],[3],[2],[3]];
stackOperations(n,arr);

