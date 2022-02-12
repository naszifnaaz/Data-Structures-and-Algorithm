/*
https://oj.masaischool.com/contest/2938/problem/02
*/

function uniqueGift(str)
{
    //stores unique elements
    var queue = [];

    //to keep track of elements counts
    var map = {};

    //final answer 
    var unique = [];

    for(let i = 0; i < str.length; i++)
    {
        //enqueue the first gift
        if(i == 0)
        {
            queue.push(str[i]);
            map[str[i]] = 1;
        }
        else
        {
            //if the gift is unique
            if(map[str[i]] == undefined)
            {
                queue.push(str[i]);
                map[str[i]] = 1;
            }

            //if the gift is not unique
            else
            {
                //update gift map
                map[str[i]] = map[str[i]] + 1;

                //dequeue until the first element in the queue is unique
                while(map[queue[0]] > 1)
                    queue.shift();
            }
        }
        unique.push(queue[0] || "#");
    }
    console.log(unique.join(""));

}


//Sample Input
uniqueGift("abadbc");
uniqueGift("abcabc");