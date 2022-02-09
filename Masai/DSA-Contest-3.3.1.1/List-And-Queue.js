/*
https://oj.masaischool.com/contest/2935/problem/03
*/

var queue = [];
var front = 0;
var rear = 0;

function listAndQueue(input)
{
    if(input[0] == "E")
    {
        queue.push(input[1]);
        rear++;
        
    }
    
    if(input[0] == "D")
    {
        if(front == rear)
            console.log("Empty");
        else
        {
            var deleted = queue.shift();
            front++;
            console.log(deleted);
        }
    }
}
