/*
https://oj.masaischool.com/contest/2454/problem/2
*/
const value = 42;

function equalTo42(arr)
{
    var flag = false;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == value)
            flag = true;
    }

    if(flag)
        console.log("Yes");
    else
        console.log("No");
}

var arr = [3,7,0,9,8];
equalTo42(arr);

arr = [3,7,19,42,20];
equalTo42(arr);