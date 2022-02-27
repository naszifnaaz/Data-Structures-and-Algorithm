/*
https://oj.masaischool.com/contest/3085/problem/03
*/


function generatePermutations(arr,n,current)
{
    if(current == n)
    {
        ans.push(arr.join(" "));
        return;
    }
    for(let i = current; i < n; i++)
    {
        swap(arr,i,current);
        generatePermutations(arr,n,current+1);
        swap(arr,i,current);
    }
}

//Swap function
function swap(arr,start,end)
{
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

//Sample Input
let arr = [1,2,3];
let n = 3;
let current = 0;
let ans = [];
generatePermutations(arr,n,current);
console.log(ans.sort().join("\n"));