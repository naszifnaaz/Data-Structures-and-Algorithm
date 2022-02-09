/*
https://oj.masaischool.com/contest/2935/problem/01
*/

var stack = [];
var queue = [];
var top = -1;
var rear = 0;
var front = 0;

function newYearCelebration(inp)
{
    //Enqueue
    if(inp[0] == 1)
    {
        queue[rear] = inp[1];
        rear++;
    }
    
    //Push
    if(inp[0] == 2)
    {
        top++;
        stack[top] = inp[1];
    }
    
    //Peek front of the queue
    if(inp[0] == 3)
    {
        if(front == rear)
            console.log("-1");
        else
            console.log(queue[front]);
    }
    
    //Peek Stack
    if(inp[0] == 4)
    {
        if(top == -1)
            console.log("-1");
        else
            console.log(stack[top]);
        
    }
    
    //Dequeue and Push to stack
    if(inp[0] == 5)
    {
        if(front == rear)
            console.log("-1");
        else
        {
            var deleted = queue[front];
            front++;
            top++;
            stack.push(deleted);
        }
    }
}
