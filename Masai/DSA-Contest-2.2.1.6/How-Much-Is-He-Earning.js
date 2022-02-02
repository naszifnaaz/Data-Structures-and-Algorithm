/*
https://oj.masaischool.com/contest/2771/problem/04
*/

function howMuchEarning(n,k,arr)
{
    var height = arr[0];
    var count = 1;
    var pay = 0;
    for(let i = 1; i < arr.length; i++)
    {
        if(arr[i] > height)
        {
            count++;
            height = arr[i];
        }
        
    }

    pay = count * k;
    console.log(pay);
}


//Sample Input
var n = 6; 
var k = 3;
var arr = [8,2,3,11,11,10];
howMuchEarning(n,k,arr);

n = 5;
k = 12;
arr = [12,20,39,45,89];
howMuchEarning(n,k,arr);