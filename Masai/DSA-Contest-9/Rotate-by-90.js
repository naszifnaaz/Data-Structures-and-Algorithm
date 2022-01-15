/*
https://oj.masaischool.com/contest/2572/problem/3
*/

function rotateBy90(size,matrix)
{
    for(let i = size-1; i >= 0; i--)
    {
        var bag = "";
        for(let j = 0; j < size; j++)
            bag += matrix[j][i] + " ";
        console.log(bag);
    }
}


//Sample Input
var size = 4;
var arr = [[1,2,3,4],[5,6,7,8],[1,2,3,4],[5,6,7,8]];
rotateBy90(size,arr);