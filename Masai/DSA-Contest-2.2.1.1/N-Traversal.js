/*
https://oj.masaischool.com/contest/2626/problem/01

Sample Output 1
7 4 1 5 9 6 3 
*/

function nTraversal(matrix,n)
{
    var bag = "";
    for(let i = n-1; i >= 0; i--)
        bag += matrix[i][0] + " ";
    
    for(let i = 1; i < n; i++)
        bag += matrix[i][i]+ " ";
    
    for(let i = n-2; i >= 0; i--)
        bag += matrix[i][n-1]+ " ";
    
    console.log(bag);
}

var matrix = [[1,2,3],[4,5,6],[7,8,9]];
nTraversal(matrix,3);