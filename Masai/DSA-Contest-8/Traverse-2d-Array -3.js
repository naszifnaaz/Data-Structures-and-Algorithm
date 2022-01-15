/*
You are given a 2D array(matrix), of N rows and M columns.
You need to print elements of array in as shown in diagram, on a single line.

Sample Input 1             Sample Output 1

4 3
1 8 9                       9 10 11 12 8 7 6 5 1 2 3 4
2 7 10
3 6 11
4 5 12

*/

function traverse2dArray(N, M, matrix)
{
    var bag = "";
    for(let j = M-1; j >= 0; j--)
    {
        for(let i = 0; i < N; i++)
            bag += matrix[i][j] + " ";
    }
    console.log(bag);
}

//Sample input
var row = 4;
var column = 3;
var matrix = [[1,8,9],[2,7,10],[3,6,11],[4,5,12]];
traverse2dArray(row, column, matrix);