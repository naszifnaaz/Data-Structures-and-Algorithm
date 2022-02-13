/*
https://oj.masaischool.com/contest/3018/problem/05
*/

function packersAndMovers(n,k,current,arr)
{
    if(current == k)
        return 1;
    
    if(current > k)
        return 0;
    
    let ans = 0;
    for(let i = 0; i < n; i++)
    {
        let count = packersAndMovers(n,k,current+arr[i],arr);
        ans += count;
    }
    return ans;
}


//Sample Input
var k = 3;
var n = 3;
var arr = [1,2,3];
var res = packersAndMovers(n,k,0,arr);
console.log(res);