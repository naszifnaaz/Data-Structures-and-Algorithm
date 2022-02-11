/*
https://oj.masaischool.com/contest/2982/problem/06
*/

function recursiveLength(str)
{
    if(str == "")
        return 0;
    else
        return recursiveLength(str.substring(1)) + 1;
}


//Sample Input
var str = "masaischool";
var n = str.length;
var ans = recursiveLength(str);
console.log(ans);