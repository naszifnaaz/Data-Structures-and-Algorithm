/*
https://oj.masaischool.com/contest/3057/problem/02
*/

function generatePermutations(n,arr,current)
{
    if(current == n)
    {
        ans.push(arr.join(" "));
        return;
    }
    
    //Brute force
    for(let i = current; i < n; i++)
    {
        swap(i,current,arr);
        generatePermutations(n,arr,current+1);  //Recursion
        swap(i,current,arr);   //Backtracking
    }
    
}

//Swap Function
function swap(start,end,arr)
{
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

//Sample Input
let ans = [];
let arr = [1,2,3];
let n = 3;
let current = 0;
generatePermutations(n,arr,current);
console.log(ans.sort().join("\n"));