/*
https://oj.masaischool.com/contest/2536/problem/2
*/

function sumOfSpecialPairs(size,arr)
{
    var sum = 0;
    for(let i = 0; i < size; i++)
    {
        for(let j = i + 1; j < size; j++)
        {
            if(i < j)
            {
                if(isPrime(j-i))
                sum += Math.abs(arr[i] - arr[j]);
            }        
        }
    }
    console.log(sum);
}

function isPrime(num)
{
    if(num == 0 || num == 1)
        return false;
    
    for(let i = 2; i <= Math.sqrt(num); i++)
        if(num % i == 0)
            return false;
    
    return true;
}

//Sample Input
var size = 6;
var arr =[1,2,3,5,7,12];
sumOfSpecialPairs(size,arr);