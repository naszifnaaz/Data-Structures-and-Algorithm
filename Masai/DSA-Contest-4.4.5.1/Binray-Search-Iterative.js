/*
https://oj.masaischool.com/contest/3209/problem/01
*/

function binarySearch(n,key,arr)
{
    let low = 0;
    let high = n - 1;
    let flag = false;

    while(low < high)
    {
        // to prevent overflow condition
        let mid = Math.floor((low + (high - low) / 2));

        if(arr[mid] == key)
        {
            flag = true;
            break;
        }

        else if(arr[mid] > key)
            high = mid - 1;
        
        else
            low = mid + 1;
    }

    if(flag)
        console.log("1");
    else
        console.log("-1");
}

//Sample Input
let n = 5;
let key = 0;
let arr = [2, -2, 0 , 3, 4];
binarySearch(n, key, arr);