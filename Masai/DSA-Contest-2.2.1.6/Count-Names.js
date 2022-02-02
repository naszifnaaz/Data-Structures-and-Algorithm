/*
https://oj.masaischool.com/contest/2771/problem/02
*/

function countNames(n,str)
{
    var map = {};
    for(let i = 0; i < n; i++)
    {
        if(map[str[i]] == undefined)
            map[str[i]] = 1;
        else
            map[str[i]] = map[str[i]] + 1;
    }
    
    var sorted = Object.keys(map).sort();
    for(let i = 0; i < sorted.length; i++)
    {
        for(key in map)
        {
            if(key == sorted[i])
                console.log(key,map[key]);
        }
    }
}


//Sample Input
var n = 3;
var arr =["masai","school","masai"];
countNames(n,arr);