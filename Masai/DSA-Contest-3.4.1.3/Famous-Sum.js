/*
https://oj.masaischool.com/contest/3035/problem/03
*/

function famousSum(num)
{
    if(num.length == 0)
        return 0;
    
    if(num.length == 1)
        return num;
        
    let sum = 0;
    for(let i = 0; i < num.length; i++)
        sum += Number(num[i]);
    
    sum = sum + "";
    return famousSum(sum);
    
}

//Sample Input
let n = "123";
let k = 3;
n = n.repeat(k);
let ans = famousSum(n);
console.log(ans);