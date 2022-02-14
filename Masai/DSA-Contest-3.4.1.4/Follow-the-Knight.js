/*
https://oj.masaischool.com/contest/3042/problem/04
*/

let board = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
    ];
let count = 0;
let row = 3;
let col = 3;
let moves = 1;

followTheKnight(board,row,col,moves);
console.log(count);
    
function followTheKnight(board,row,col,moves)
{
    if(row < 0 || row > 9 || col < 0 || col > 9)
        return;
        
    if(moves == 0)
    {
        if(board[row][col] == 0)
            count++;
        board[row][col] = 1;
        return;
    }
    else
    {
        followTheKnight(board,row-2,col+1,moves-1);
        followTheKnight(board,row-2,col-1,moves-1);
        followTheKnight(board,row+2,col+1,moves-1);
        followTheKnight(board,row+2,col-1,moves-1);
        followTheKnight(board,row-1,col+2,moves-1);
        followTheKnight(board,row+1,col+2,moves-1);
        followTheKnight(board,row-1,col-2,moves-1);
        followTheKnight(board,row+1,col-2,moves-1);
    }
}