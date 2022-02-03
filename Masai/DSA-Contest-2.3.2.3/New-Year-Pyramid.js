/*
https://oj.masaischool.com/contest/2835/problem/03
*/

function newYearPyramid(num)
{
    var level = 1;
    while(num > 0)
    {
        var temp = findSum(level);
        if(temp > num)
            break;
        else
        {
            num = num - temp;
            level++;
        }
        
    }
    console.log(level-1);
}

//First n Sum
function findSum(n)
{
    return n*(n+1)/2;
}

//Sample Input
var num = 25;
newYearPyramid(num);