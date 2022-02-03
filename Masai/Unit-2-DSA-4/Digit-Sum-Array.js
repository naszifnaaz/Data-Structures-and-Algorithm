/*
https://oj.masaischool.com/contest/2852/problem/03
*/

function digitSumArray(n,arr)
{
    var ans = [];
    
    for(let i = 0; i < n; i++)
    {
        var digit = 0;
        while(arr[i] > 0)
        {
            digit += arr[i] % 10;
            arr[i] = Math.floor(arr[i] / 10);
        }
        ans.push(digit);
    }

    console.log(ans);
}

//Sample Input
var n = 5;
var arr = [12,14,16,17,29];
digitSumArray(n,arr);