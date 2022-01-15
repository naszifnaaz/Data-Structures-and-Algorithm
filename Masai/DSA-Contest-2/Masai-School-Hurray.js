/*
https://oj.masaischool.com/contest/2439/problem/3
*/

function masaiSchoolHurray(num)
{
    for(let i = 1; i <= num; i++)
    {
        if(i % 5 == 0 && i % 7 == 0)
            console.log("Masai School");
        else if(i % 5 == 0)
            console.log("School");
        else if(i % 7 == 0)
            console.log("Masai");
        else
            console.log("Hurray!");
    }
}


masaiSchoolHurray(35);