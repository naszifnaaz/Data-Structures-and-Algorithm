/*
https://oj.masaischool.com/contest/2644/problem/03
*/

function matrixPrimeCheck(N,M,arr)
{
    var count = 0;
    for(let i = 0; i < N; i++)
    {
        for(let j = 0; j < M; j++)
        {
            if(isPrime(arr[i][j]))
                count++;
        }
    }
    console.log(count);
}

function isPrime(num)
{
    if(num == 0 || num == 1)
        return false;
    
    for(let i = 2; i < num; i++)
    {
        if(num % i == 0)
            return false;
    }    
    return true;
}

var matrix = [[1,2,3],[4,5,6],[7,8,9]];
matrixPrimeCheck(3,3,matrix);