/*
https://oj.masaischool.com/contest/3337/problem/04
*/

function pokemonBattle(n,ash,gary)
{
    let flag = true;
    
    ash.sort(function (a,b) {
        return a - b;
    });
    
    gary.sort(function (a,b) {
        return a - b;
    });
    
    
    for(let i = 0; i < n; i++)
    {
        if(gary[i] >= ash[i])
            flag = false;
    }
    
    if(flag)
        console.log('Ash Finally Wins');
    else
        console.log('Train Hard Again');
}


//Sample Input
let n = 3;
let ash = [12,3,4];
let gary = [5,4,1];
pokemonBattle(n,ash,gary);