/*
https://oj.masaischool.com/contest/2771/problem/01
*/

function noddyExamination(n,k,arr)
{
    var count = 0;
    var skip = 0;
    for(let i = 0;i < n; i++)
    {
        if(arr[i] > k && skip == 0)
            skip++;
        else if(arr[i] <= k)
            count++;
        else
            break;
    }
    console.log(count);
}
//Sample Input
var n = 7;
var k = 6;
var arr =[4,3,7,6,7,2,2];
noddyExamination(7,6,arr);