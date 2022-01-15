/*
https://oj.masaischool.com/contest/2454/problem/1
*/

const highscore = 264;

function breakingRecord(runs)
{
    if(runs > highscore)
        console.log("Broken");
    else if(runs < highscore)
        console.log("Not Yet");
    else
        console.log("Wao");
}

breakingRecord(200);
breakingRecord(264);
breakingRecord(300);