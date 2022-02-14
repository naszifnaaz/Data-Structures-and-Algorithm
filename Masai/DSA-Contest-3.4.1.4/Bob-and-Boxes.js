/*
https://oj.masaischool.com/contest/3042/problem/06
*/

function bobAndBoxes(n,current)
{
    if(current == n)
        return 1;
    
    if(current > n)
        return 0;
    
    return bobAndBoxes(n,current + 1) + bobAndBoxes(n,current + 3) + bobAndBoxes(n,current + 5);
}

//Sample Input
let ans = bobAndBoxes(7,0);
console.log(ans);