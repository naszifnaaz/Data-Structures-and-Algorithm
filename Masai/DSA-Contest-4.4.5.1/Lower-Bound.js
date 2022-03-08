/*
https://oj.masaischool.com/contest/3209/problem/04
*/

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

//Sample Input
let n = 5;
let k = 2;
let arr = [1,1,2,2,5];

let ans = lowerBound(n,k,arr);
console.log(ans);
