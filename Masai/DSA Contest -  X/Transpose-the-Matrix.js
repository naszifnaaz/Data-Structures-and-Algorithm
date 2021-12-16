/*
The transpose of a matrix is an operator which flips a matrix over its diagonal,
that is it switches the row and column of the matrix by producing another matrix.

See sample test case for better understanding
So, given an array of n rows and m columns, generate the transpose of the matrix.

First line contains two integers n and m
Next n lines contain m integers which represents each row of 2d array
Print the transposed array

Sample Input                                  Sample Output
5 4
0 0 0 0                                         0 1 2 3 4
1 1 1 1                                         0 1 2 3 4              
2 2 2 2                                         0 1 2 3 4
3 3 3 3                                         0 1 2 3 4
4 4 4 4                                         0 1 2 3 4

*/

function transposeTheMatrix(N,M,matrix)
{
    for(let i = 0; i < M; i++)
    {
        var bag = "";

        for(let j = 0; j < N; j++)
            bag += matrix[j][i] + " ";
        
        console.log(bag);
    }
}


//Sample input
var row = 5;
var column = 4;
var matrix = [[0,0,0,0],[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4]];
transposeTheMatrix(row,column,matrix);