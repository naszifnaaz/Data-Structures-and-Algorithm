/*
You are given an array matrix of n rows and m columns which contains positive integers and sums.

You need to find occurrences of the sum of three consecutive numbers (i.e x,y, and z ) whose sum is equal to s appear horizontally, vertically and diagonally in the given matrix.

Input Format
First line: Three integers n, m and s, where n denotes the number of rows, m denotes the number of columns in the matrix and s is the sum.

Next n lines: Each line contains m characters which contain positive integers only.

Constraints

1 <= n,m < 10
1 <= s <= 50

Output
Print the number of times the sum s appear in the matrix.

Input                                                   Output

3 3 6                                                      4
3 2 1
2 2 2
1 5 1

here s is 6 presents 4 times( 2 Horizontal + 1 Vertical + 1 Diagonal)
*/


function twoArrayAndSum(n, m, matrix, s)
{
    var count = 0;
    for(let i = 0; i < n; i++)
    {
        var sum = 0;
        for(let j = 0; j < m; j++)
        {
            //checking vertically
            if(i < n -2)
            {
                sum = matrix[i][j] + matrix[i+1][j] + matrix[i+2][j];
                if(sum == s)
                    count++;
            }

            //checking horizontally
            if(j < m-2)
            {
                sum = matrix[i][j] + matrix[i][j+1] + matrix[i][j+2];
                if(sum == s)
                    count++;
            }

            //checking in primary diagonal or i == j diagonal
            if(i < n-2 && j < m-2)
            {
                sum = matrix[i][j] + matrix[i+1][j+1]+ matrix[i+2][j+2];
                if(sum == s)
                    count++;
            }

            //checking in secondary diagonal or (i+j) == (n -1) diagonal
            if(i>=2 && j < m-2)
            {
                sum = matrix[i][j] + matrix[i-1][j+1] + matrix[i-2][j+2];
                if(sum == s)
                    count++;
            }

        }
    }
    console.log(count);
}

//Sample input
var row = 3;
var column = 3;
var sum = 6;
matrix = [[3,2,1],[2,2,2],[1,5,1]];
twoArrayAndSum(row,column,matrix,sum);