/*
https://oj.masaischool.com/contest/3128/problem/02
*/

function dDigit(num,k)
{
    let count = 0;
    for(let i = 0; i < num.length; i++)
        if(num[i] == k)
            count++;
    
    console.log(count);
}

//Sample input
let num = "113344887";
let k = 3;
dDigit(num,k);
