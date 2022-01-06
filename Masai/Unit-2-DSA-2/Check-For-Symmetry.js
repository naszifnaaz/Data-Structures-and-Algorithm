/*
https://oj.masaischool.com/contest/2720/problem/02
*/

function checkForSymmetry(n,matrix)
{
    var h_bag = "";
    var rev_h_bag = "";
    var v_bag = "";
    var rev_v_bag = "";

    var horizontal = false;
    var vertical = false;

    for(let i = 0; i < n; i++)
    {
        h_bag += matrix[0][i];
        rev_h_bag += matrix[0][n-i-1];

        v_bag += matrix[i][0];
        rev_v_bag += matrix[n-i-1][0];
    }
    
    if(h_bag == rev_h_bag)
        vertical = true;
    
    if(v_bag == rev_v_bag)
        horizontal = true;

    console.log(v_bag);
    console.log(rev_v_bag);

    if(horizontal && vertical)
        console.log("BOTH");

    if(!horizontal && !vertical)
        console.log("NO");

    if(horizontal && !vertical)
        console.log("HORIZONTAL");
    
    if(!horizontal && vertical)
        console.log("VERTICAL");
    

}

var size = 4;
var matrix = [[".",".",".","."],[".","*",".","*"],["*",".","*","."],[".","*",".","*"]];
checkForSymmetry(size,matrix)