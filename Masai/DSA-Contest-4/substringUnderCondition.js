/*
https://oj.masaischool.com/contest/2487/problem/2
*/

function substringUnderCondition(str)
{
    var count = 0;
    for(let i = 0; i < str.length; i++)
    {
        for(let j = i; j < str.length; j++)
        {
            if(str[i] == str[j])
                count++;
        }
    }
    console.log(count);
}


//Sample input
substringUnderCondition("abcab");