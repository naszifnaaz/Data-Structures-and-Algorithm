/*
https://oj.masaischool.com/contest/2967/problem/06
*/

function keepDistinct(str)
{
    var bag = "";
    for(let i = 0; i < str.length; i++)
    {
        if(bag.includes(str[i]))
            continue;
        else
            bag += str[i];
    }
    console.log(bag);
}


//Sample Input
var str = "iloveprogramming";
keepDistinct(str);