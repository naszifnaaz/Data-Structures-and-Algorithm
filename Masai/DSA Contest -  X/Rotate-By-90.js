/*
Given a squarematrixof size N, turn it by 90 degrees in an anti-clockwise direction, as shown in sample input.

Input Format
First line will contain the number of rows N (same as the number of columns)
After that next N lines will N rows of the matrix.

Sample Input 1                              Sample Output 1

4
1 2 3 4                                      4 8 4 8 
5 6 7 8                                      3 7 3 7
1 2 3 4                                      2 6 2 6
5 6 7 8                                      1 5 1 5

*/

function rotateBy90(R,matrix)
{
    for(let j = R-1; j >= 0; j--)
    {
        bag = "";

        for(let i = 0; i < R; i++)
            bag += matrix[i][j] + " ";
        
        console.log(bag);
    }
}


//Sample input
var row = 4;
var matrix = [[1,2,3,4],[5,6,7,8],[1,2,3,4],[5,6,7,8]];
rotateBy90(row,matrix);