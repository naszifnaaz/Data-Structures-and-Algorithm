/*
You are given an array matrix of n rows and m columns which contains lower case English letters.

How many times does the phrase "saba" appear horizontally, vertically, and diagonally in the grid?

Print the number of times the word “saba” appears in the grid.

Sample Input             Sample Output

5 5                             2
safer
amjad
babol
aaron
songs

*/

function twoArrayAndPhrase(n,m,matrix)
{
    var count = 0;

    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < m; j++)
        {     
            ///checking vertically
            if(i < n-3)
            {
                if(matrix[i][j] == "s" && matrix[i+1][j] == "a" && matrix[i+2][j] == "b" && matrix[i+3][j] == "a")
                    count++;
            }

            //checking horizontally
            if(j < m-3)
            {
                if(matrix[i][j] == "s" && matrix[i][j+1] == "a" && matrix[i][j+2] == "b" && matrix[i][j+3] == "a")
                    count++;
            }

            //checking in primary diagonal
            if(i < n-3 && j < m-3)
            {
                if(matrix[i][j] == "s" && matrix[i+1][j+1] == "a" && matrix[i+2][j+2] == "b" && matrix[i+3][j+3] == "a")
                    count++;
            }

            //checking for secondary diagonal
            if(i >=3 && j < n-3)
            {
                if(matrix[i][j] == "s" && matrix[i-1][j+1] == "a" && matrix[i-2][j+2] == "b" && matrix[i-3][j+3] == "a")
                    count++;
            }
        }
    }
    console.log(count);
}


//Sample input
var row = 5;
var column = 5;
var matrix = [["s","a","f","a","r"],["a","m","j","a","d"],["b","a","b","o","l"],["a","a","r","o","n"],["s","o","n","g","s"]];
twoArrayAndPhrase(row,column,matrix);