/*
https://oj.masaischool.com/contest/2906/problem/03
*/

function libraryManagementSoftware(input)
{
    var stack = [];
    var top = -1;

        //Push 
    if(input[0] == 1)
    {
        stack.push(input[1]);
        top++;
    }

    //Pop
    if(input[0] == 2)
    {
        if(top == -1)
            console.log("No Books");
        else
        {
            console.log(stack[stack.length-1]);
            stack.pop();
            top--;
        }
    }

    //Peek
    if(input[0] == 3)
    {
        if(top == -1)
            console.log("No Books");
        else
            console.log(stack[stack.length-1]);
        
    }
     
}


//Sample Input
var N = 5;
var arr = [[1,1],[2],[1,2],[3],[2],[3]];
libraryManagementSoftware(N,arr);