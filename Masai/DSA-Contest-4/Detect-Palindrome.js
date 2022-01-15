/*
https://oj.masaischool.com/contest/2487/problem/1
*/

function detectPalindrome(num)
{
    var rev_num = 0;
    var num_copy = num;
    while(num != 0)
    {
        var digit = num % 10;
        num = Math.floor(num / 10);
        rev_num = rev_num * 10 + digit;
    }

    if(num_copy == rev_num)
        console.log("Yes");
    else
        console.log("No");
}


//Sample input
detectPalindrome(12221);
detectPalindrome(12223);