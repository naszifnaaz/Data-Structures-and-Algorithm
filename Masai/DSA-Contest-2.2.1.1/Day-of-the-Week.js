/*
https://oj.masaischool.com/contest/2626/problem/04
*/

function dayOfTheWeek(day,N)
{
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var map={};
    for(let i = 0; i < 7; i++)
    {
        map[days[i]] = i;
    }
    
    var result = (map[day] + N) % 7;
    
    for(let key in map)
    {
        if(map[key] == result)
            console.log(key);
    }
    
}

dayOfTheWeek("Wednesday",8);