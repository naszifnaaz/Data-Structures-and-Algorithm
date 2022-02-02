/*
https://oj.masaischool.com/contest/2814/problem/02
*/

function runningSum(n,arr)
{
    var ans = [];
    var sum = 0;
    for(let i = 0; i < n; i++)
    {
        sum += arr[i];
        ans.push(sum);
    }
    console.log(ans.join(" "));
}

//Sample Input
var n = 5;
var arr = [1,2,3,4,5];
runningSum(n,arr);
