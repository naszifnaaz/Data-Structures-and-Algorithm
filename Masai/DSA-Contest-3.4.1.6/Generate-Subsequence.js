/*
https://oj.masaischool.com/contest/3085/problem/04
*/

function generateSubsequence(str,n,new_str,index)
{
    if(new_str.length != 0)
    {
        console.log(new_str);
    }

    if(index == n)
        return;

    for(let i = index; i < n; i++)
    {
        new_str += str[i];
        generateSubsequence(str,n,new_str,i+1);
        new_str = new_str.substring(0,new_str.length - 1);
    }

}

//Sample Input
let str = "abcd";
let n = 4;
let new_str = "";
let index = 0;
generateSubsequence(str,n,new_str,index);