/*
https://oj.masaischool.com/contest/2935/problem/02
*/


var queue = [];
var front = 0;
var rear = 0;

function buyTicket(input)
{
    if(input[0] == "E")
    {
        console.log(rear - front + 1);
        queue[rear] = input[1];
        rear++;
    }
    
    if(input[0] == "D")
    {
        var bag = "";
        if(front == rear)
            bag += "-1" + " ";
        else
        {
            var deleted = queue[front];
            front++;
            bag += deleted + " ";
        }
        var length = rear - front;
        bag += length;
        console.log(bag);
    }
}
