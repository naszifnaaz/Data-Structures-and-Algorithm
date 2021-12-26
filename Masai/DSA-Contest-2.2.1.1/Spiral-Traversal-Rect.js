/*
https://oj.masaischool.com/contest/2626/problem/03

Sample Output 1
1 5 9 10 11 12 8 4 3 2 6 7 
*/

function spiralTraversal(matrix,N,M)
{  
    var bag = "";
    var top = 0;
    var bottom = N-1;
    var left = 0;
    var right = M-1;
    var count = 0;

    while(count < N * M)
    {
        for(let i = top; i <= bottom && count < N*M; i++)
        {
            bag += matrix[i][left] + " ";
            count++;
        }
        
        left += 1;

        for(let i = left; i <= right && count < N*M; i++)
        {
            bag += matrix[bottom][i] + " ";
            count++;
        }

        bottom -= 1;

        for(let i = bottom; i >= top && count < N*M; i--)
        {
            bag += matrix[i][right] + " ";
            count++;
        }

        right -= 1;

        for(let i = right; i >= left && count < N*M; i--)
        {
            bag += matrix[top][i] + " ";
            count++;
        }

        top += 1;
    }

    console.log(bag);

}

var matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
spiralTraversal(matrix,3,4);