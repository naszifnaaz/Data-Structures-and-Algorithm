/*
https://oj.masaischool.com/contest/3104/problem/02
*/

//Sudoku Solver
function sudokuSolver(board,row,col)
{
    if(row == 9)
    {
        solution = true;
        displayBoard(board);
        return;
    }

    // To find which is next cell to solve
    let next_row = 0;
    let next_col = 0

    if(col == 8)
    {
        next_row = row + 1;
        next_col = 0; 
    }
    else
    {
        next_row = row;
        next_col = col + 1;
    }

    //Figuring out the input, if there is no value already inputted
    if(board[row][col] != 0)
        sudokuSolver(board,next_row,next_col);
    else
    {
        for(let value = 1; value <= 9; value++)
        {
            if(isSafe(board,row,col,value))
            {
                board[row][col] = value;
                sudokuSolver(board,next_row,next_col);
                board[row][col] = 0;
            }
        }
    }
}


// Checking if a value entered is legit
function isSafe(board,row,col,value)
{
    // Checking Horizontally
    for(let i = 0; i < board.length; i++)
        if(board[row][i] == value)
            return false;
    
    //Checking Vertically
    for(let i = 0; i < board.length; i++)
        if(board[i][col] == value)
            return false;
    
    //Checking Grids
    let x = Math.floor(row/3) * 3;
    let y = Math.floor(col/3) * 3;

    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
            if(board[x+i][y+j] == value)
                return false;
    }

    return true;
}

// Displaying Board
function displayBoard(board)
{
    for(let i = 0; i < 9; i++)
        console.log(board[i].join(" "));
}

//Sample Input : A 9 * 9 sudoku board
//Define board
let board = [];
let line = 0;
for(let i = 0; i < 9; i++)
{
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    board.push(arr);
}

//To check if there is a solution at all
let solution = false;

//Initial Function call, with 0th row and 0th column
sudokuSolver(board,0,0);