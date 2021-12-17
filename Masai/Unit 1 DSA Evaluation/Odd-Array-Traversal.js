/*
You are given an array stored in a variable with the namearr, and the size of the array is stored in a variable with the nameN

You have to print the values stored at odd indexes in the array, in the same order as they are present in the array

For this problem, consider the indexing starts from 0

For example, consider the value stored in N = 5, and arr = [1 2 3 4 5], then the elements stored at odd indexes are 2,4. Therefore, the required output becomes

2 4

Input
The first line of the input contains N, the size of the array. The next line contains N space separated integers, denoting the elements in the array.

Constraints

1 <= N <= 100

1 <= A[i] <= 10


Output
Print the odd traversal of the array on a single line.

Sample Input 1      Sample Output 1

5
1 2 3 4 5                 2 4
*/

function oddArrayTraversal(N, array) {
    var bag = "";
    for(let i = 0; i < N; i++)
    {
        if(i% 2 != 0)
            bag += array[i] + " ";
    }
    console.log(bag);
}

var arr = [1,2,3,4,5];
oddArrayTraversal(5,arr);