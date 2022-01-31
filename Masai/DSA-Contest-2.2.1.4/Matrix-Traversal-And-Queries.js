/*
https://oj.masaischool.com/contest/2713/problem/04
*/

function matrixTraversal(n,m,q,matrix)
{
    var bag = "";
    if(q == 1)
    {
        for(let i = 0; i < n; i++)
        {
            if(i % 2 == 0)
            {
                for(let j = 0; j < m; j++)
                    bag += matrix[i][j] + " ";
            }
            else
            {
                for(let j = m-1; j >= 0; j--)
                    bag += matrix[i][j] + " ";
            }
        }
    }

    if(q==2)
    {
        for(let i = 0; i < n; i++)
        {
            if(i % 2 == 0)
            {
                for(let j = m-1; j >= 0; j--)
                    bag += matrix[i][j] + " ";
            }
            else
            {
                for(let j = 0; j < m; j++)
                    bag += matrix[i][j] + " ";
            }
        }

    }

    console.log(bag);
}

//Sample Input
var n = 3;
var m = 3;
var q = 1;
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
matrixTraversal(n,m,q,matrix);
var q = 2;
matrixTraversal(n,m,q,matrix);
