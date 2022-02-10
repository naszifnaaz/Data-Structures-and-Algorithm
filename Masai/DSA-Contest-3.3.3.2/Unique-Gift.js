/*
https://oj.masaischool.com/contest/2938/problem/02
*/

function uniqueGift(str)
{
    var queue = [];
    var bag = "";
    var front = 0;
    for(let i = 0; i < str.length; i++)
    {
        if(queue.includes(str[i]))
        {
            if(queue[front] == str[i])
                front++;
            else
            {
                var index = queue.indexOf(str[i]);
                if (index !== -1) 
                    queue.splice(index, 1);
            }
            if(queue[front] == undefined)
                bag += "#";
            else
                bag += queue[front];
        }
            
        else
        {
            queue.push(str[i]);
            bag += queue[front];
        }      
    }
    console.log(bag);

}


//Sample Input
uniqueGift("abadbc");
uniqueGift("abcabc");
uniqueGift("wnryhycoynfetlqeziwq");