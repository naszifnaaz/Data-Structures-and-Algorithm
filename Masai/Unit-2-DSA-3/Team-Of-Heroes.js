/*
https://oj.masaischool.com/contest/2789/problem/02
*/

function teamOfHeroes(n,k,arr)
{
    //Two Pointers
    var left = 0;
    var right = n - 1;
    var flag = false;

    while(left < right)
    {
        var sum = arr[left] + arr[right];
        if(sum == k)
        {
            flag = true;
            break;
        }
        else if(sum > k)
            right--;
        else
            left++;
    }

    if(flag)
        console.log("Yes");
    else
        console.log("No");
}

//Sample Input
var n = 6;
var k = 31;
var arr = [10,11,13,17,21,23];
teamOfHeroes(n,k,arr);