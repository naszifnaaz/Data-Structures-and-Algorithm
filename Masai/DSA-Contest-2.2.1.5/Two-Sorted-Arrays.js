/*
https://oj.masaischool.com/contest/2749/problem/05
*/


function twoSortedArrays(size,arr1,arr2)
{
    var count = 0;
    //implementing using two pointer approch
    var left = 0;
    var right = size - 1;

    while(left < size && right >= 0)
    {
        if(arr1[left] == arr2[right])
        {
            count++;
            left++;
            right--;
        }
        else if(arr1[left] > arr2[right])
            right--;
        
        else if(arr1[left] < arr2[right])
            left++;

    }

    console.log(count);
}

//Sample Input
var size = 6;
var arr1 = [1,2,2,3,4,5];
var arr2 = [4,4,3,2,1,1];
twoSortedArrays(size,arr1,arr2);