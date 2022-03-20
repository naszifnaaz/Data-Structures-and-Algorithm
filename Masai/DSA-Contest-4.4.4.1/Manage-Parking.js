/*
https://oj.masaischool.com/contest/3358/problem/07
*/

//Brute Force Approch
function manageParkingBruteForce(k, arr, dep)
{
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++)
    {
        let count = 0;
        for (let j = i + 1; j < dep.length; j++)
        {
            if (dep[i] >= arr[j])
                count++;
        }

        if (count > max)
            max = count;
    }

    max = max + 1;

    if (max > k)
        console.log("Not Possible");
    else
        console.log("Possible");
}

//Optimised Approch using two pointers
function manageParkingGreedyApproch(k,arr,dep)
{
    arr.sort(function (a,b) {
        return a - b;
    });
    
    dep.sort(function (a,b) {
        return a - b;
    });
    
    let platform = 1;
    let max = 1;
    
    let i = 1;
    let j = 0;
    
    while(i < arr.length && j < dep.length)
    {
        if(arr[i] <= dep[j])
        {
            platform++;
            i++;
        }
        else if(arr[i] > dep[j])
        {
            platform--;
            j++;
        }
        
        if(platform > max)
            max = platform;
    }
    
    if(max > k)
        console.log('Not Possible');
    else
        console.log('Possible');
}

//Sample Input
let k = 1;
let arr = [1, 3, 5];
let dep = [2, 6, 8];

manageParkingBruteForce(k, arr, dep);
manageParkingGreedyApproch(k,arr,dep);
