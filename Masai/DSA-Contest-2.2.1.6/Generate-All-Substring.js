/*
https://oj.masaischool.com/contest/2771/problem/03
*/

function generateAllSubstring(str)
{
    for(let i = 0; i < str.length; i++)
    {
        for(let j = i; j < str.length; j++)
        {
            var bag = "";
            for(let k = i; k <= j; k++)
                bag += str[k];
            console.log(bag);
        }
    }
}


//Sample Input
var str = "masai";
generateAllSubstring(str);