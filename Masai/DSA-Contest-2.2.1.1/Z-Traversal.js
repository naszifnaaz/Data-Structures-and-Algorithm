/*
https://oj.masaischool.com/contest/2626/problem/02
Sample Output 1
1 2 3 5 7 8 9 
*/

function zTraversal(matrix,n)
{
    var bag = "";
    for(let i = 0; i < n-1; i++)
        bag += matrix[0][i]+ " ";

    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
        {
            if((i+j) == (n-1))
                bag += matrix[i][j] + " ";
        }
    }

    for(let i = 1; i < n; i++)
        bag += matrix[n-1][i] + " ";

    console.log(bag);
}

var matrix = [[1,2,3],[4,5,6],[7,8,9]];
zTraversal(matrix,3);