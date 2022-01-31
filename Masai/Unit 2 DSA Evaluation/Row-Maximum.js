/*
https://oj.masaischool.com/contest/2906/problem/05
*/

function rowMaximum(N,M,arr)
{
    var bag = "";
    for(let i = 0; i < N; i++)
    {
        var max= -Infinity;
        for(let j = 0; j < M; j++)
        {
            if(arr[i][j] > max)
                max = arr[i][j];
        }
        bag += max + " ";
    }

    console.log(bag);
}


//Sample Input
var N = 3;
var M = 3;
var arr = [[1,2,3],[4,5,6],[7,8,9]];
rowMaximum(N,M,arr);