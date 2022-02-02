/*
https://oj.masaischool.com/contest/2814/problem/05
*/

function reverseNTraversal(n,arr)
{
    var bag = "";
    for(let i = 0; i < n-1; i++)
    {
        bag += arr[i][0] + " ";
    }

    for(let i = n-1; i >= 0; i--)
    {
        for(let j = n-1; j >= 0; j--)
        {
            if(i + j == n - 1)
                bag += arr[i][j] + " ";
        }
        
    }

    for(let i = 1; i < n; i++)
    {
        bag += arr[i][n-1] + " ";
    }

    console.log(bag);
}

//Sample Input
var n = 3;
var arr = [[1,2,3],[4,5,6],[7,8,9]];
reverseNTraversal(n,arr);