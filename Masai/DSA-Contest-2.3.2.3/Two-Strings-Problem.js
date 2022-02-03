/*
https://oj.masaischool.com/contest/2835/problem/05
*/

function twoStringsProblem(str1,str2)
{
    var flag = false;
    for(let i = 0; i < str1.length; i++)
    {
        for(let j = i; j < str1.length; j++)
        {
            var bag = "";
            for(let k = i; k <= j; k++)
                bag += str1[k];
            
            if(bag == str2)
                flag = true;
        }
    }
    if(flag)
        console.log("Yes");
    else
        console.log("No");
}

//Sample Input
var str1 = "masai";
var str2 = "sai";
twoStringsProblem(str1,str2);
