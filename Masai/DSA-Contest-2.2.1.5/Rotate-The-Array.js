/*
https://oj.masaischool.com/contest/2749/problem/04
*/

function rotateTheArray(size,k,arr)
{
    /*
    1 2 3 4 5    2    - Initial Array

    5 4 3 2 1    2 % 5 = 2  Reverse the array , there is a pattern
    
    4 5 3 2 1   - Reverse 0 to K-1

    4 5 1 2 3  - Reverse k to size  - Final Output

    */

    k = k % size; 

    reverseArray(0,size,arr);
    reverseArray(0,k,arr);
    reverseArray(k,size,arr);
    console.log(arr.join(" "));
}

//Reversing the array
function reverseArray(start,end,arr)
{
    var left = start;
    var right = end - 1;

    while(left < right)
    {
        swap(left,right,arr);
        left++;
        right--;
    }
}

//Swap function
function swap(left,right,arr)
{
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

var size = 5;
var k = 2;
var arr =[1,2,3,4,5];
rotateTheArray(size,k,arr);