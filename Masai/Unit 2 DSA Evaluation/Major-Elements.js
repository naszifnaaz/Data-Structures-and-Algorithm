/*
https://oj.masaischool.com/contest/2906/problem/02
*/

function majorElements(N,arr)
{
    var map = {};
    var bag = "";
    for(let i = 0; i < N; i++)
    {
        if(map[arr[i]] == undefined)
            map[arr[i]] = 1;
        else
            map[arr[i]] = map[arr[i]] + 1;
    }
    
    var frequency = Math.floor(N/2);

    for(key in map)
    {
        if(map[key] > frequency)
            bag += key;
    }

    if(bag == "")
        console.log("-1");
    else
        console.log(bag);
}

//Sample Input
var N = 3;
var arr = [1,1,2];
majorElements(N,arr);