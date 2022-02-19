/*
https://oj.masaischool.com/contest/3057/problem/01
*/

function subsequence(new_str,str,index,n)
{
    if(new_str.length != 0)
        console.log(new_str);
    
    if(index == n)
        return;
    
    for(let i = index; i < n; i++)
    {
        new_str += str[i];
        subsequence(new_str,str,i+1,n);
        new_str = new_str.substring(0,new_str.length-1);
    }
}

//Sample Input
let n = 4;
let str = "abcd";
let new_str = "";
let index = 0;

subsequence(new_str,str,index,n);
