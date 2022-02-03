/*
https://oj.masaischool.com/contest/2914/problem/1
*/

function friendsAndParty(A,B,C)
{
    var ans = (A + C - 1);
    ans = ans % B;
    console.log(ans);
}


//Sample Input
friendsAndParty(8,5,2);