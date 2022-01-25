/*
https://oj.masaischool.com/contest/2661/problem/02
*/

function spiralTraversal(N,matrix)
{
    var top = 0;
    var bottom = N-1;
    var left = 0;
    var right = N-1;
    var count = 0;
    var elements = N * N;

    var bag = "";

    while(count < elements)
    {
        for(let i = top; i <= bottom; i++ && count < elements)
        {
            bag += matrix[i][right] + " ";
            count++;
        }

        right--;

        for(let i = right; i >= left; i-- && count < elements)
        {
            bag += matrix[bottom][i] + " ";
            count++;
        }

        bottom--;

        for(let i = bottom; i >= top; i-- && count < elements)
        {
            bag += matrix[i][left] + " ";
            count++;
        }
        
        left++;

        for(let i = left; i <= right; i++  && count < elements)
        {
            bag += matrix[top][i] + " ";
            count++;
        }

        top++;
    }
    
    console.log(bag);
}


//Sample Input
//3 6 9 8 7 4 1 2 5 
var N = 3;
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
spiralTraversal(N,matrix);