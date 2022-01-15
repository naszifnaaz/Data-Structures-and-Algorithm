/*
https://oj.masaischool.com/contest/2572/problem/2
*/

function specificDiagonals(row,column,matrix,target)
{
    var index_i = -1;
    var index_j = -1;
    var bag = "";
    for(let i = 0; i < row; i++)
    {
        for(let j = 0; j < column; j++)
        {
            if(matrix[i][j] == target)
            {
                index_i = i;
                index_j = j;
            }
        }
    }

    for(let i = 0; i < row; i++)
    {
        for(let j = 0; j < column; j++)
        {
            //Main Diagonal
            if(i - j == index_i - index_j)
                bag += matrix[i][j] + " ";
        }
    }
    console.log(bag);
    bag = "";
    for(let i = 0; i < row; i++)
    {
        for(let j = 0; j < column; j++)
        {
            //Secondary Diagonal
            if(i + j == index_i + index_j)
            bag += matrix[i][j] + " ";
        }
    }
    console.log(bag);
}

//Sample Input
var row = 3;
var column = 3;
var target = 6;
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
specificDiagonals(row,column,matrix,target);