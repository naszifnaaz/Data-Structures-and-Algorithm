/*
https://oj.masaischool.com/contest/2720/problem/04
*/

function arrayToString(size,arr)
{
    var bag = "";
    for(let i = 0; i < size; i++)
    {
        if(arr[i] < 0)
            bag += "0";
        else
            bag += arr[i];
    }
    console.log(bag);
}

var size = 5;
var arr =[2,-4,6,8,-9];
arrayToString(size,arr);