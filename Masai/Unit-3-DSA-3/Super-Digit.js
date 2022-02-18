/*
https://oj.masaischool.com/contest/3071/problem/01
*/

function superDigit(n)
{
    if(n.length == 1)
        return n;
    
    else if(n.length == 0)
        return 0;
    
    let sum = 0;
    for(let i = 0; i < n.length; i++)
        sum += Number(n[i]);
    
    sum = sum.toString();

    return superDigit(sum);
}

//Sample Input
let n = "186";
let ans = superDigit(n);
console.log(ans);