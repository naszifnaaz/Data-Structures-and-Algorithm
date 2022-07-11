/*
You are given a string S. Find if the string, can be converted into a palindrome.
You are free to rearrange the string in any way you want. Rearrangement refers to the fact that the characters can be arranged in any way in the string.
Deletion or addition of characters is not allowed.

Sample Input 1 
2
6
aabbcc
5
aabcd

Sample Output 1
Possible!
Not Possible!
*/


function detectPalII(N, S) {
    //write code here
    let obj = {};
    for (let i = 0; i < N; i++) {
        if (obj[S[i]])
            obj[S[i]]++;
        else
            obj[S[i]] = 1;
    }

    let flag = true;

    //if string is of even length
    if (N % 2 == 0) {
        for (key in obj) {
            if (obj[key] % 2 != 0) {
                flag = false;
                break;
            }

        }
    }
    //if string is of odd length
    else {
        let count = 0;
        for (key in obj) {
            if (obj[key] % 2 != 0)
                count++;
        }

        if (count != 1)
            flag = false;
    }

    if (flag)
        console.log("Possible!");
    else
        console.log("Not Possible!");
}
