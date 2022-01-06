/*
https://oj.masaischool.com/contest/2720/problem/01
*/

function PlanningForParty(size1,arr1,size2,arr2)
{
    var jim ={};
    var pam = {};

    for(let i = 0; i < size1; i++)
    {
        if(pam[arr1[i]] == undefined)
            pam[arr1[i]] = 1; 
        else
            pam[arr1[i]] = pam[arr1[i]] + 1;
    }
        
    

    for(let i = 0;i < size2; i++)
    {
        if(jim[arr2[i]] == undefined)
            jim[arr2[i]] = 1;
        else
            jim[arr2[i]] =  jim[arr2[i]] + 1;
    }
    
    var pam_array = Object.keys(pam).join(" ");
    var jim_array = Object.keys(jim).join(" ");

    if(pam_array == jim_array)
        console.log("Yes");
    else
        console.log("No");

}

var size1 = 6;
var arr1 =[1,2,2,3,4,5];
var size2 = 6;
var arr2 =[1,2,3,4,5,5];

PlanningForParty(size1,arr1,size2,arr2);