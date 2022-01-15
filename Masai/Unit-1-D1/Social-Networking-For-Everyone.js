/*
https://oj.masaischool.com/contest/2498/problem/103
*/

function socialNetworkingForEveryone(age)
{
    if(age < 13)
        console.log("1 Kms");
    else if(age >= 13 && age < 18)
        console.log("5 Kms");
    else if(age >= 18 && age < 30)
        console.log("10 Kms");
    else
        console.log("You can have friends from anywhere");
}

//Sample Inputs
socialNetworkingForEveryone(15);
socialNetworkingForEveryone(30);