/*
https://oj.masaischool.com/contest/3358/problem/08
*/

function minimizeCoins(num) {
    let coins = 0;
    let arr = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let i = 0;
    while (num > 0) {
        if (num >= arr[i]) {
            coins++;
            num -= arr[i];
        }
        else
            i++;

        if (i == arr.length)
            break;
    }
    console.log(coins);
}


//Sample Input
minimizeCoins(45);
minimizeCoins(93);