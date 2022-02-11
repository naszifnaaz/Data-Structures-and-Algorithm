/*
https://oj.masaischool.com/contest/3000/problem/02
*/

function oddOneOut(a,b,c)
{
    if(a == b)
        console.log(c);
    else if(b == c)
        console.log(a);
    else if(a == c)
        console.log(b);
    else
        console.log("0");
}

//Sample Input
oddOneOut(2,5,2);