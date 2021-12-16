/*
You are given a 2D array(matrix), of N rows and M columns.
You need to print elements of array as shown in the diagram, on a single line.

Sample Input 1 

4 3
1 8 9                   4 3 2 1 5 6 7 8 12 11 10 9
2 7 10
3 6 11
4 5 12

*/

function traverse2dArray(N, M, matrix)
{
    var bag = "";
    for(let j = 0; j < M; j++)
    {
        for(let i = N-1; i >= 0; i--)
            bag += matrix[i][j] + " ";
    }
    console.log(bag);
}


//Sample input
var row = 4;
var column = 3;
var matrix = [[1,8,9],[2,7,10],[3,6,11],[4,5,12]];
traverse2dArray(row, column, matrix);