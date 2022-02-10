/*
https://oj.masaischool.com/contest/2938/problem/05
*/


function listAndQueue(n,arr)
{
    var queue = [];
    for(let i = 0; i < n; i++)
    {
        if(arr[i][0] == "Push")
            queue.push(arr[i][1]);
        
        if(arr[i][0] == "Pop")
        {
            console.log(queue);
            let popped = queue.pop();
            console.log(popped);
        }
            
    }
}


//Sample Input

var n = 3;
var arr = [["Push",4],["Push",5],["Pop"]];
listAndQueue(n,arr);