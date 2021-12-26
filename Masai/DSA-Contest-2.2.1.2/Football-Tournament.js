/*
https://oj.masaischool.com/contest/2644/problem/06
*/

function footballTournament(N,goals)
{
    var map = {};
    for(let i = 0; i < N; i++)
    {
        if(map[goals[i]] == undefined)
            map[goals[i]] = 1;
        else
            map[goals[i]] = map[goals[i]] + 1;
    }

    if(goals[1] == undefined)
        console.log(goals[0]);
    else if(map[goals[0]] > map[goals[1]])
        console.log(goals[0]);
    else
        console.log(goals[1]);
    
}

var goals = ["A","ABA","ABA","A","A"];
footballTournament(goals.length,goals);