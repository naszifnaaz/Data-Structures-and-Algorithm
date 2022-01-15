/*
https://oj.masaischool.com/contest/2498/problem/301
*/

function nobitaAndChange(size,str)
{
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var bag = "";

    for(let i = 0; i < size; i++)
    {
        for(let j = 0; j < upper.length; j++)
        {
            if(str[i] == upper[j])
                bag += lower[j];
            
            if(str[i] == lower[j])
                bag += lower[j];
        }
    }
    console.log(bag);
}


//Sample Input
var str = "abAbC";
nobitaAndChange(str.length,str);