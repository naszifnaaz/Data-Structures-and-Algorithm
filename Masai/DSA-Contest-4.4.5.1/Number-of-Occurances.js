/*
https://oj.masaischool.com/contest/3209/problem/06
*/

function countOccurrences(n,k,arr)
{
    // Number of occurances can be found by upperbound - lowerBound

    let ub = upperBound(n,k,arr);
    let lb = lowerBound(n,k,arr);

    return (ub - lb + 1);
}


function lowerBound(n,k,arr)
{
    let low = 0;
    let high = n - 1;
    let ans = -1;

    while(low <= high)
    {
        let mid = Math.floor((low + high) / 2);

        if(arr[mid] == k)
        {
            ans = mid;
            high = mid - 1;
        }

        else if(arr[mid] > k)
            high = mid - 1;
        
        else
            low = mid + 1;

    }
    return ans;
}

function upperBound(n,k,arr)
{
    let low = 0;
    let high = n - 1;
    let ans = -1;
    
    
    while(low <= high)
    {
        let mid = Math.floor((low + high) / 2);

        if(arr[mid] == k)
        {
            ans = mid;
            low = mid + 1;
        }
            
        else if(arr[mid] > k)
            high= mid - 1;
    
        else
           low = mid + 1;  
    }
    return ans;
}

//Sample Input
let n = 6;
let k = 3;
let arr = [2,3,3,3,6,9];

let ans = countOccurrences(n,k,arr);
console.log(ans);

