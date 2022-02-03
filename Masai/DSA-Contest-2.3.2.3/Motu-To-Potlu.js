/*
https://oj.masaischool.com/contest/2835/problem/04
*/

function motuToPotlu(num)
{
    var step = 0;
    while(num >= 5)
    {
        num -= 5;
        step++;
    }

    while(num == 4)
    {
        num -= 4;
        step++;
    }

    while(num == 3)
    {
        num -= 3;
        step++;
    }

    while(num == 2)
    {
        num -= 2;
        step++;
    }
    
    while(num == 1)
    {
        num -= 1;
        step++;
    }

    console.log(step);

}

//Sample Input
var num = 26;
motuToPotlu(num);