/*
https://oj.masaischool.com/contest/2661/problem/04
*/

function binaryMatrix(N,M,matrix)
{
    for(let i = 0; i < N; i++)
    {
        for(let j = 0; j < M; j++)
        {
            if(matrix[i][j] == 0)
                matrix[i][j] = 1;
            else
                matrix[i][j] = 0;
        }
    }
    console.log(matrix);
}


//Sample Input
var N = 3;
var M = 2;
var matrix = [[1,0],[0,1],[1,1]];
binaryMatrix(N,M,matrix);