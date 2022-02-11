/*
https://oj.masaischool.com/contest/2947/problem/02
*/


function firstNegativeInteger(n,k,arr)
{
    var ans = [];
    var flag;

    for(let i = 0; i < (n - k + 1); i++)
    {
        flag = false;
        for(let j = 0; j < k; j++)
        {
            if(arr[i + j] < 0)
            {
                ans.push(arr[i + j]);
                flag = true;
                break;
            }
        }

        if(!flag)
            ans.push(0);
    }

    console.log(ans.join(" "));
}


//Sample Input
var n = 5;
var k = 2;
var arr = [-8,2,3,-6,10];

firstNegativeInteger(n,k,arr);