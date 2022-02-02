/*
https://oj.masaischool.com/contest/2789/problem/01
*/

function countConsonants(str)
{
    var count = 0;
    for(let i = 0; i < str.length; i++)
    {
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u")
            continue;
        else
            count++;
    }
    console.log(count);
}

//Sample Input
var str = "masaischool";
countConsonants(str);