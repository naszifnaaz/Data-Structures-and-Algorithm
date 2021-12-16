/*
Given amatrix with N rows and M columns. Print the matrix elements starting from the top right corner and follow a zig-zag pattern.
Look at the image for better understanding

Sample Input 1                    Sample Output 1

5 5
4 7 1 1 7                      7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 7 7 4 7 7 5 5 2 6 8
8 9 9 6 1
6 4 9 5 1
7 7 4 7 7
8 6 2 5 5
*/

function goInZigZag(N, M, matrix)
{
    var bag = "";
    for(let i = 0; i < N; i++)
    {
        if(i % 2 == 0)
            for(let j = M-1; j >= 0; j--)
                bag += matrix[i][j] + " ";
        
        else
            for(let j = 0; j < M; j++)
                bag += matrix[i][j] + " ";
    }
    console.log(bag);
}


//Sample input
var row = 5;
var column = 5;
var arr = [[4,7,1,1,7],[8,9,9,6,1],[6,4,9,5,1],[7,7,4,7,7],[8,6,2,5,5]]
goInZigZag(row,column,arr);
