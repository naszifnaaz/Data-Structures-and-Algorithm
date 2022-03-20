/*
https://oj.masaischool.com/contest/3358/problem/05
*/

function discoverNumber(n, arr, val) {

    arr.sort(function (a, b) {
        return a - b;
    })

    let low = 0;
    let high = n - 1;


    let flag = false;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] == val) {
            flag = true;
            break;
        }
        else if (arr[mid] > val)
            high = mid - 1
        else
            low = mid + 1
    }

    if (flag)
        console.log("YES");
    else
        console.log('NO');
}

//Sample Input Values
let n = 5;
let arr = [50, 40, 30, 20, 10];
let val = 10;

discoverNumber(n, arr, val);