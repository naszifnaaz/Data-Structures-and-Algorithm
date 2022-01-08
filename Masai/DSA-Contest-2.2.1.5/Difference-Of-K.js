/*
https://oj.masaischool.com/contest/2749/problem/06
*/

function differenceOfK(size,k,arr)
{
    var flag = false;
    //implementing using two pointer approch
    var right = size - 1;
    var left = size - 2;
    var diff = 0;

    while(left >= 0 && right >= 0)
    {
        diff = arr[right] - arr[left];
        if(diff == k)
        {
            flag = true;
            break;
        }

        else if(diff > k)
            right--;
        
        else if(diff < k)
            left--;
    }

    if(flag)
        console.log("Yes");
    else
        console.log("No");

}


//Sample Input
var size = 5;
var k = 3;
var arr = [1,2,3,4,5];

differenceOfK(size,k,arr);
