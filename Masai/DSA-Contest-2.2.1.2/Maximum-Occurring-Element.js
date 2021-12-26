/*
https://oj.masaischool.com/contest/2644/problem/05
*/

function maximumOccuringElement(n,arr)
{
    var map = {};
    var max = -Infinity;
    var result = 0;
    for(let i = 0; i < n; i++)
    {
        if(map[arr[i]] == undefined)
            map[arr[i]] = 1;
        else
        map[arr[i]] = map[arr[i]] + 1;
    }

    for(key in map)
    {
        if(map[key] > max)
        {
            max = map[key];
        }
    }

    for(key in map)
    {
        if(map[key] == max)
        {
            console.log(key);
            break;
        }
    }
}

var arr = [0,2,0,6,9];
maximumOccuringElement(arr.length,arr);