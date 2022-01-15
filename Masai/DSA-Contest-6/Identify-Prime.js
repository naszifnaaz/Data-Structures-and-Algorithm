/*
https://oj.masaischool.com/contest/2519/problem/2
*/

function identifyPrime(num)
{
    if(isPrime(num))
        console.log("Yes");
    else
        console.log("No");
    
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

identifyPrime(13);
identifyPrime(10);