/*
https://oj.masaischool.com/contest/3337/problem/01
*/

function stealAsMuch(capacity,n,value,weight)
{
    let ratio = [];

    for(let i = 0; i < n; i++)
    {
        let temp = [value[i] / weight[i], value[i], weight[i]];
        ratio.push(temp);
    }

    ratio.sort(function(a,b) {
        return b[0] - a[0];
    });

    let current_weight = 0;
    let total_profit = 0;

    for(let i = 0; i < capacity; i++)
    {
        total_profit += ratio[i][1];
        current_weight += ratio[i][2];

        if(current_weight > capacity)
        {
            let diff = capacity - current_weight;
            total_profit += diff * ratio[i][0];
            break;
        }
    }

    total_profit = Math.round(total_profit);
    console.log(total_profit);
}

//Sample Input
let capacity = 50;
let n = 3;
let value = [60,100, 120];
let weight = [10, 20, 30];
stealAsMuch(capacity,n,value,weight);

