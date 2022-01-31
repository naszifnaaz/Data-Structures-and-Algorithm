/*
https://oj.masaischool.com/contest/2713/problem/02
*/

function rotateClockwise(n,arr)
{
    for(let i = 0; i < n; i++)
    {
        var bag = "";
        for(let j = n-1; j >= 0; j--)
        {
            bag += arr[j][i] + " ";
        }
        console.log(bag);
    }
}

//Sample Input
var n = 4;
var arr = [[1,2,3,4],[5,6,7,8],[1,2,3,4],[5,6,7,8]];
rotateClockwise(n,arr);