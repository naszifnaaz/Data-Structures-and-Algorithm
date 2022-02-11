/*
https://oj.masaischool.com/contest/3018/problem/05
*/

function packersAndMovers(n,k,arr)
{
    if(k == 0)
        return 1;
    else if(k < 0)
        return 0;
    else
        return packersAndMovers(n-1,k-arr[n-1],arr);
}


//Sample Input
var k = 3;
var n = 3;
var arr = [1,2,3];
var ans = packersAndMovers()