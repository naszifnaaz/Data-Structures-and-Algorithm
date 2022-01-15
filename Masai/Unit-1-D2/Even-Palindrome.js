/*
https://oj.masaischool.com/contest/2543/problem/202
*/

function evenPalindrome(size,str)
{
    var new_str = "";
    var str_rev = "";
    for(let i = 0; i < size; i++)
    {
        if(i % 2 == 0)
            new_str += str[i];
    }
    
    //reversing the string
    for(let i = new_str.length - 1; i >= 0; i --)
        str_rev += new_str[i];
    
    if(str_rev == new_str)
        console.log("yes");
    else
        console.log("no");
}

//Sample Input
var size = 7;
var str = "abcdcfa";
evenPalindrome(size,str);
