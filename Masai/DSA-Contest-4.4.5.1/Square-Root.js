/*
https://oj.masaischool.com/contest/3209/problem/03
*/

function squareRoot(num)
{
    let low = 0;
    let high = n;
    let ans = -1;

    while(low < high)
    {
        let mid = Math.floor((low + high) / 2);
        let temp = mid * mid;

        if(temp == num)
            return mid;
        
        else if(temp > num)
            high = mid - 1;
        
        else
        {
            low = mid + 1;
            ans = mid;
        }
    }
    return ans;
}


//Sample Input
let n = 4;
let ans = squareRoot(n);
console.log(ans);

n = 8;
ans = squareRoot(n);
console.log(ans);