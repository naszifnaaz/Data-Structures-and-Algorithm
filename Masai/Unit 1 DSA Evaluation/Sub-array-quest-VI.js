/*
Given an array A with N positive integers. Count the number of subarrays of length greater than 1, such that the sum of the start and end elements of the subarray is even.


Input

First line: Single integer denoting the value of N.

Next line: N single space-separated integers denoting the elements of array A.

Constraints:

1 <= T <= 100
1 <= N<= 100

Any array elements is not greater than 100.


Output
a single integer denoting the number of subarrays.

Sample Input 1            Sample Output 1

5
1 2 3 4 5                      4


Given test cases,

Test 1:
N = 5.
A: 1 2 3 4 5.
The following subarrays have an even sum of start and end elements :
1. 1 2 3
2. 1 2 3 4 5
3. 2 3 4
4. 3 4 5

Hence the answer is 4.

*/

function subArrQueVI(N, A)
{
    var count = 0;
    for(let i = 0; i < N; i++)
    {
        for(let j = i; j < N; j++)
        {
            var array = [];
            var sum = 0;
            
            for(let k = i; k <= j ; k++)
            {
                array.push(A[k]);
                
            }
            if(array.length > 1)
            {
                sum = array[0] + array[array.length-1];
                if(sum % 2 == 0)
                    count++;
            }
        }
    }
    console.log(count);
}

var arr = [1,2,3,4,5];
subArrQueVI(5,arr);