/*
https://oj.masaischool.com/contest/2822/problem/03
*/


var stack = [];
var top = -1;

function masaiRestaurent(n,arr)
{
    for(let i = 0; i < n; i++)
    {
        //Pop Operation
        if(arr[i][0] == 1)
        {
            if(top == -1)
                console.log("No Food");
            else
            {
                var popped = stack[top];
                top--;
                console.log(popped);
            }
        }

        //Push Operation
        if(arr[i][0] == 2)
        {
            stack[++top] = arr[i][1];
        }
    }
}

//Sample Input
var n = 6;
var arr = [[1],[2,5],[2,7],[2,9],[1],[1]];
masaiRestaurent(n,arr);
