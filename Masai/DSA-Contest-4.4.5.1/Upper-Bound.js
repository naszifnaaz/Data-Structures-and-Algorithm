/*
https://oj.masaischool.com/contest/3209/problem/05
*/


function upperBound(n,k,arr)
{
    let low = 0;
    let high = n - 1;
    let ans = -1;

    while(low <= high)
    {
        let mid = Math.floor((low + high) / 2);

        if(arr[mid] <= k)
            low = mid + 1;
        
        else
        {
            ans = mid;
            high = mid - 1;
        }   
    }
    return ans;

}


//Sample Input
let n = 10;
let k = 4;
let arr = [0,2,4,4,5,5,7,7,9,10];

let ans = upperBound(n,k,arr);
console.log(ans);