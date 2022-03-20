/*
https://oj.masaischool.com/contest/3337/problem/02
*/

function gasStation(n,gas,cost)
{
    let current_fuel = 0;
    let start = 0;

    for(let i = 0; i < n; i++)
    {
        let net_fuel = gas[i] - cost[i];
        current_fuel += net_fuel;

        if(current_fuel < 0)
        {
            start = i + 1;
            current_fuel = 0;
        }
    }

    if(current_fuel < 0)
        start = -1;
    
    for(let i = 0; i < n; i++)
    {
        let net_fuel = gas[i] - cost[i];
        current_fuel += net_fuel;

        if(current_fuel < 0)
        {
            start = -1;
            break;
        }
    }
    
    console.log(start);
}

//Sample Input
let n = 5;
let gas = [1,2,3,4,5];
let cost = [3,4,5,1,2];
gasStation(n,gas,cost);
