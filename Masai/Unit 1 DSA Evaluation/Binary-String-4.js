/*
You are given a string stored in a variable with the name str, whose length is stored in a variable with the name N

The string is binary, which means it contains only 1's and 0's

You have to find the length of the longest substring which starts at 0 and ends at 0 as well

For example, consider the value stored in N = 4, andstr = 1001

All the non empty subarrays of the given string are

1
10
100
1001
0
00
001
0
01
1

The longest substring starting at 0 and end at 0 is 00, whose length is 2. Therefore, the required output is 2
Note : If the count of 0's in the given string is less than or equal to 1, then the output should be 0, as there are no substring starting and ending at 0


Input
The first line of the input contains the value stored in N

The second line contains the value stored in str


Output
Print one number, denoting the length of the longest substring starting with 1 and end at 1 as well

Sample Input 1          Sample Output 1

6
110101                        3

Sample Input 2          Sample Output 2

5
11011                         0
*/

function binaryString4(N,str)
{
    var max_length = 0;
    for(let i = 0; i < N; i++)
    {
        for(let j = i; j < N; j++)
        {
            var bag = "";
            if(str[i] == 0 && str[j] == 0)
            {
                var length = 0;
                for(let k = i; k <= j; k++)
                {
                    bag += str[k];
                    length = (j-i)+1;
                }
                if(length > max_length)
                    max_length = length;
            }
        }
    }
    if(max_length == 1)
        max_length = 0;
    console.log(max_length);
}

var str = "110101";
binaryString4(6,str);