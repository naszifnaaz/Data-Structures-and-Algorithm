/*
https://oj.masaischool.com/contest/2644/problem/02
*/

function detectPalindrome(N,string)
{
    var map = {};
    var bool = true;
    for(let i = 0; i < N; i++)
    {
        if(map[string[i]] == undefined)
            map[string[i]] = 1;
        else
            map[string[i]] = map[string[i]] + 1;
    }
    
    if(N % 2 == 0)
    {
        for(key in map)
        {
            if(map[key] % 2 != 0)
                bool = false;
        }
    }
    else
    {
        var count = 0;
        var check = "";
        for(key in map)
        {
            if(map[key] == 1)
            {
                check = key;
                count++;
            }
        }
            for(key in map)
            {
                if(key != check && count == 1)
                {
                    if(map[key] % 2 != 0)
                        bool = false;
                        break;
                }
                bool = false;
            }
    }

    if(N == 1)
        bool = true;
    if(bool == true)
            console.log("Possible!");
        else
            console.log("Not Possible!");
}


var str = "giggbgb";
detectPalindrome(str.length,str);