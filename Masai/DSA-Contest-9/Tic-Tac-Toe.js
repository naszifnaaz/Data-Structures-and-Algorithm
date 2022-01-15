/*
https://oj.masaischool.com/contest/2572/problem/1
*/
function ticTacToe(board)
{
    var win ="";
    for(let i = 0; i < 3; i++)
    {
        //checking horizontally
        if(board[i][0] == "x" && board[i][1] == "x" && board[i][2] == "x")
            win = "x";

        if(board[i][0] == "o" && board[i][1] == "o" && board[i][2] == "o")
            win = "o";
        
        //checking vertically
        if(board[0][i] == "x" && board[1][i] == "x" && board[2][i] == "x")
            win = "x";

        if(board[0][i] == "o" && board[1][i] == "o" && board[2][i] == "o")
            win = "o";
    }

    //checking main diagonal
    if(board[0][0] == "x" && board[1][1] == "x" && board[2][2] == "x")
        win = "x";
    
    if(board[0][0] == "o" && board[1][1] == "o" && board[2][2] == "o")
        win = "o";
    
    //checking secondary diagonal
    if(board[0][2] == "x" && board[1][1] == "x" && board[2][0] == "x")
        win = "x";
    
    if(board[0][2] == "o" && board[1][1] == "o" && board[2][0] == "o")
        win = "o";

    console.log(win);
}

//Sample Input

// var board = [["x","o","x"],["o","x","x"],["o","o","o"]];
var board = [["x","o","x"],["o","x","x"],["o","o","o"]];
ticTacToe(board);