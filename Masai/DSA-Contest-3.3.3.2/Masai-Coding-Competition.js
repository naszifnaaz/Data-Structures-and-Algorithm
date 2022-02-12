/*
https://oj.masaischool.com/contest/2938/problem/01
*/

//Queues for each of the four teams
let q1 = [];
let q2 = [];
let q3 = [];
let q4 = [];

//A master queue
let queue = [];

function masaiCodingCompetition(input)
{
    if(input[0] == 'E')
    {
        if(input[1] == '1')
            q1.push(+(input[2]));
            
        else if(input[1] == '2')
            q2.push(+(input[2]));
        
        else if(input[1] == '3')
            q3.push(+(input[2]));
        
        else
            q4.push(+(input[2]));
            
        
        let group = +(input[1]);

        if(queue.includes(group) == false)
            queue.push(group);
    }
    
    else
    {
        if(queue[0] == 1)
        {
            console.log(1,q1[0]);
            q1.shift();
            if(q1.length == 0)
                queue.shift();
        }
        else if(queue[0] == 2)
        {
            console.log(2,q2[0]);
            q2.shift();
            if(q2.length == 0)
                queue.shift();
        }
        else if(queue[0] == 3)
        {
            console.log(3,q3[0]);
            q3.shift();
            if(q3.length == 0)
                queue.shift();
        }
        else
        {
            console.log(4,q4[0]);
            q4.shift();
            if(q4.length == 0)
                queue.shift();
        }
    }
}
