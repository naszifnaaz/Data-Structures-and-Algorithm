/*
https://oj.masaischool.com/contest/2505/problem/3
*/

function palindromicSubstring(str)
{
    var max_length = 0;
    
    //Finding substrings that start and end with same character
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
                {
                    bag += str[k];
                }

                //checking substring for palindrome
                for(let l = bag.length-1; l >= 0; l--)
                    rev_bag += bag[l];
                
                //find max length
                if(bag == rev_bag)
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

//Sample input
palindromicSubstring("thisracecarisgood");