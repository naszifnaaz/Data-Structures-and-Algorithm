/*
https://oj.masaischool.com/contest/3209/problem/02
*/

function binarySearch(low,high,key,arr)
{
    if(low > high) 
        return;
    
    
    let mid = Math.floor((low + (high - low) /2 ));
    
    if(arr[mid] == key)
    {
        flag = true;
        return;
    }
       
    
    else if(arr[mid] > key)
        binarySearch(low,mid-1,key,arr);
    
    else
        binarySearch(mid+1,high,key,arr)
}
//Sample Input
let n = 5;
let key = 9;
let arr = [2, -2, 0 , 3, 4];
let low = 0;
let high = n - 1;
let flag = false;
binarySearch(low,high,key,arr);

if(flag)
    console.log("1");
else
    console.log("-1");