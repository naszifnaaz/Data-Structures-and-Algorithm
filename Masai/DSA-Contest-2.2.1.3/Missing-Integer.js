/*
https://oj.masaischool.com/contest/2686/problem/03
*/

function missingInteger(arr)
{
    var n = arr.length + 1;
    var sum = (n * (n+1)) / 2;
    var actual_sum = 0;
    
    for(let i = 0; i < arr.length; i++)
        actual_sum += arr[i];
    
    console.log(sum - actual_sum);
    
}


//Sample Input
var arr = [4,5,1,3];
missingInteger(arr);