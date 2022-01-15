/*
https://oj.masaischool.com/contest/2519/problem/4
*/

function stringValue(str)
{
    var characters = "abcdefghijklmnopqrstuvwxyz";
    var value = 0;

    for(let i = 0; i < str.length; i++)
    {
        for(let j = 0; j < characters.length; j++)
        {
            if(str[i] == characters[j])
                value += (j + 1);
        }
    }
    console.log(value);
}

//Sample Input
stringValue("aba");