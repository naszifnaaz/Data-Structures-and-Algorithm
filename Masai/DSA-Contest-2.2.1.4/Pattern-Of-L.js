/*
https://oj.masaischool.com/contest/2713/problem/03
*/

function patternOfL(n)
{
    var bag = "";

    for(let i = 0; i < n-1; i++)
        console.log("*");
    
    for(let i = 0; i < n; i++)
        bag += "* ";
    console.log(bag);
}


//Sample Input
var n = 5;
patternOfL(n);