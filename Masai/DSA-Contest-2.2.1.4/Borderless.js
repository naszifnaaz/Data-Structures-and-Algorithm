/*
https://oj.masaischool.com/contest/2713/problem/05
*/

function borderless(n,m,matrix)
{
    var sum = 0;
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < m; j++)
        {
            if(i == 0 || i == n-1 || j == 0 || j == m-1)
                sum += 0;
            else
                sum += matrix[i][j];
        }
    }
    console.log(sum);
}


//Sample input
var n = 4;
var m = 4;
var matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
borderless(n,m,matrix);