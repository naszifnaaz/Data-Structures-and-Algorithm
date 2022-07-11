/*
You are given an string of size N, of characters from 'a' to 'z'.
You need to print number of times you can make "ping", using characters from string. You can use a character only once from the string.

Sample Input 1 
2
7
pingpin
8
pingping

Sample Output 1
1
2
*/

function numberOfPing(n, str) {
    let obj = {
        "p": 0,
        "i": 0,
        "n": 0,
        "g": 0
    }

    for (let i = 0; i < n; i++) {
        if (obj[str[i]] != undefined)
            obj[str[i]] = obj[str[i]] + 1;
    }


    let min = Infinity;

    for (key in obj) {
        if (obj[key] < min)
            min = obj[key];
    }

    console.log(min);
}