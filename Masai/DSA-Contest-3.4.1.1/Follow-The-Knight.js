/*
https://oj.masaischool.com/contest/2982/problem/07
*/


let board = [];
let count = 0;

function defineBoard()
{
    //Defining a 10 * 10 board with 0's
    for(let i = 0; i < 10; i++)
    {
        let arr = [];
        for(let j = 0; j < 10; j++)
            arr.push(0);
        board.push(arr);
    }

    //Initial position of the knight
    let initial_row = 3;
    let initial_col = 3;
    let moves = 1;

    //decreasing row an col by 1, since 0 index
    followTheKnight(board,initial_row-1,initial_col-1,moves); 

    console.log(count);
}



function followTheKnight(board,row,col,moves)
{
    //boundary check
    if(row < 0 || row > 9 || col < 0 || col > 9)
        return;
    
    //base condition
    if(moves == 0)
    {
        if(board[row][col] == 0)
            count++;
        
        //to avoid duplicates
        board[row][col] = 1;
        return;
    }
    else
    {
        //Knight moves
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

defineBoard();