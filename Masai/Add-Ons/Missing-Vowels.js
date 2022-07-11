/*
You are given a string, stored in a variablestr, and the length of the string is stored in the variableN

You have to find all the vowels that are not present in the string and print them.
If a string contains all the vowels, in that case, print -1.
For example, consider the value stored inN = 6, andstr = nature

Sample Input 1 
6
nature

Sample Output 1
io
*/

function missingVowel(N, str) {
    let bag = "";
    let new_str = "";
    let vowels = "aeiou";

    //Filtering out non vowels from the given string
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] == vowels[j])
                new_str += str[i];
        }
    }

    //Creating a hash map for the string
    let obj = {};
    for (let i = 0; i < new_str.length; i++)
        if (!obj[new_str[i]])
            obj[new_str[i]] = 1;

    //Checking for missing vowels
    for (let i = 0; i < vowels.length; i++) {
        if (obj[vowels[i]] == undefined)
            bag += vowels[i];
    }

    if (bag)
        console.log(bag);
    else
        console.log(-1);

}