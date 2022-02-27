/*
https://oj.masaischool.com/contest/3085/problem/01
*/

function nQueens(board,row)
{
    // base condition
    if(row == board.length)
    {
        count++;
        return;
    }

    for(let col = 0; col < board.length; col++)
    {
        //if the column is safe from other queens
        if(isSafe(board,row,col))
        {   
            board[row][col] = 1;
            nQueens(board,row+1);
            board[row][col] = 0;
        }
    }
}

//Safe function
function isSafe(board,row,col)
{
    //Checking vertically
    for(let i = 0; i < row; i++)
        if(board[i][col] == 1)
            return false;
        
    
    //Checking along main diagonal
    for(let i = row-1, j = col -1; i >= 0 && j >= 0; i--,j--)
        if(board[i][j] == 1)
            return false;
        
    //Checking along secondary diagonal      
    for(let i = row-1,j = col +1; i >= 0 && j < board.length; i--,j++)
        if(board[i][j] == 1)
            return false;
    
    return true;
}



//Sample Input
let n = 4;

//Defining the board
let board = [];
for(let i = 0; i < n; i++)
{
    let arr = [];
    for(let j = 0; j < n; j++)
        arr.push(0);
    board.push(arr);
}

//To track no of ways queens can be placed
let count = 0;

nQueens(board,0);
console.log(count);
