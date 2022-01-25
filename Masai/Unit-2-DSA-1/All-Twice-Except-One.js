/*
https://oj.masaischool.com/contest/2661/problem/01
*/

function allTwiceExceptOne(N,arr)
{
    var map = {};
    for(let i = 0; i < 2*N - 1; i++)
    {
        if(map[arr[i]] == undefined)
            map[arr[i]] = 1;
        else
            map[arr[i]] = map[arr[i]] + 1;
        
    }
    
    for(key in map)
    {
        if(map[key] == 1)
            console.log(key);
    }
}

//Sample Input
var N = 5;
var arr = [1,2,1,3,4,4,5,2,3]
allTwiceExceptOne(N,arr);