/*
https://oj.masaischool.com/contest/2713/problem/01
*/


function circularTraversal(N,matrix)
{
    var bag = "";
    for(let i = N-1; i >= 0; i--)
        bag += matrix[i][0] + " ";
    
    for(let i = 1; i < N; i++)
        bag += matrix[0][i] + " "
    
    for(let i = 1; i < N; i++)
        bag += matrix[i][N-1] + " ";
    
    for(let i = N-2; i >= 1; i--)
        bag += matrix[N-1][i] + " ";
    
    console.log(bag);
}



//Sample Input
var n = 3;
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
circularTraversal(n,matrix);

//7 4 1 2 3 6 9 8 