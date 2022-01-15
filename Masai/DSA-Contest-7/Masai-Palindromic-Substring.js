/*
https://oj.masaischool.com/contest/2519/problem/1
*/

function palindromicSubstring(str)
{   
    var max_length = 0;
    //Finding all substrings that starts and end with same character
    for(let i = 0; i < str.length; i++)
    {
        for(let j = i; j < str.length; j++)
        {
            var bag = "";
            var rev_bag = "";
            var length = 0;

            if(str[i] == str[j])
            {
                for(let k = i; k <= j; k++)
                    bag += str[k];
    
                //checking for palindrome
                for(let l = bag.length - 1; l >= 0; l--)
                    rev_bag += bag[l];
                
                if(rev_bag == bag)
                {
                    length = bag.length;
                    if(length > max_length)
                        max_length = length;
                }
            }
        }
    }
    console.log(max_length);
}

//Sample Input
palindromicSubstring("thisracecarisgood");