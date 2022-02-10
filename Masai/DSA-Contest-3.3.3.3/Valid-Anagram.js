/*
https://oj.masaischool.com/contest/2967/problem/03

a word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function validAnagram(str1,str2)
{

    var flag = true;

    var map1 = {};
    for(let i = 0; i < str1.length; i++)
    {
        if(map1[str1[i]] == undefined)
            map1[str1[i]] = 1;
        else
            map1[str1[i]] = map1[str1[i]] + 1;
    }


    var map2 = {};
    for(let i = 0; i < str2.length; i++)
    {
        if(map2[str2[i]] == undefined)
            map2[str2[i]] = 1;
        else
            map2[str2[i]] = map2[str2[i]] + 1;
    }
    console.log(map1);
    console.log(map2);

    for(key in map1)
    {
        if(map1[key] != map2[key])
            flag = false;
    }

    console.log(flag);
}   


//Sample Input
validAnagram("abcd","dcab");
validAnagram("aa","aaa");

/*
Alternatively we can sort both strings, then compare them 
*/