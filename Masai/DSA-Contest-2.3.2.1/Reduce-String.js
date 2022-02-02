/*
https://oj.masaischool.com/contest/2822/problem/02
*/

function reduceString(str)
{
    let bag = "";
    var i = 0;
    while(i < str.length)
    {
        if(str[i] == str[i + 1])
            i += 2;
        else
        {
            bag += str[i];
            i++;
        }      
    }
    console.log(bag);
}


//Sample Input
var str = "aaabccddd";
reduceString(str);