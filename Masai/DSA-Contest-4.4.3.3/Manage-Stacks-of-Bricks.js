/*
https://oj.masaischool.com/contest/3337/problem/03
*/

function manageStacks(n,x,y,current,desired)
{

    let effort = 0;

    current.sort(function(a,b) {
        return a - b;
    });

    desired.sort(function(a,b) {
        return a - b;
    });

    for(let i = 0; i < n; i++)
    {
        if(current[i] > desired[i])
            effort += (current[i] - desired[i]) * y;
        
        if(current[i] < desired[i])
            effort += (desired[i] - current[i]) * x;
    }

    console.log(effort);
}

//Sample Input
let current = [3,1,1];
let desired = [1,2,2];
let n = 3;
let x = 6;
let y = 4;
manageStacks(n,x,y,current,desired);
