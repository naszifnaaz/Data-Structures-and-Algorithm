/*
https://oj.masaischool.com/contest/2686/problem/02
*/

function arrayAndProduct(n,m,k,matrix)
{
    var count = 0;
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < m; j++)
        {
            //Checking vertically
            if(i < n - 2)
            {
                var sum = matrix[i][j] * matrix[i+1][j] * matrix[i+2][j];
                if(sum == k)
                    count++;
            }
            
            //Checking horizontally
            if(j < m - 2)
            {
                var sum = matrix[i][j] * matrix[i][j+1] * matrix[i][j+2];
                if(sum == k)
                    count++;
            }
            
            //Checking main diagonal
            if(i < n - 2 && j < m - 2)
            {
                var sum = matrix[i][j] * matrix[i+1][j+1] * matrix[i+2][j+2];
                if(sum == k)
                    count++;
            }
            
            //Checking secondary diagonal
            if(i >= 2 && j < m - 2)
            {
                var sum = matrix[i][j] * matrix[i-1][j+1] * matrix[i-2][j+2];
                if(sum == k)
                    count++;
            }
        }
    }
    console.log(count);
}

//Sample Input
var n = 3;
var m = 3;
var k = 6;
var matrix = [[3,2,1],[2,2,2],[1,5,1]];
arrayAndProduct(n,m,k,matrix);
