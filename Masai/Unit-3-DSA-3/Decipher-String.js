/*
https://oj.masaischool.com/contest/3071/problem/03
*/

function decipherString(str)
{
    let char = [];
    let keys = [];
    let bag = "";
    for(let i = 0; i < str.length;i++)
    {
        if(str[i] >= "a" && str[i] <= "z")
            char.push(str[i]);
        
        else
            keys.push(str[i]);
    }

    for(let i = 0; i < char.length; i++)
        bag += char[i].repeat(Number(keys[i]));

    console.log(bag);
}


//Sample Input
let str = "a2b1c2";
decipherString(str);