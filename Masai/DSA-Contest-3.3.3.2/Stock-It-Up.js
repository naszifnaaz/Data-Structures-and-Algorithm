/*
https://oj.masaischool.com/contest/2938/problem/06
*/

function stockItUp(n,arr)
{
    var cost = [110,120,42,53,40,32,126];
    var quantity = [5,2,2,3,2,5,2];
    var total_cost = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == 1)
            total_cost +=  quantity[i] * cost[i];
    }
    total_cost *= n;
    console.log(total_cost);
    
}

//Sample Input
var n = 4;
var arr = [0,1,1,1,0,0,1];
stockItUp(n,arr);