/*
Given an array A of N positive numbers. The task is to find the position where equilibrium first occurs in the array. Equilibrium position in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

Sample Input 1 
5
3 3 5 5 1

Sample Output 1
3
*/


function equilibriumElement(N, arr) {
    let position = -1;

    for (let i = 0; i < N; i++) {
        let left_sum = 0;
        let right_sum = 0;

        //Finding left sum
        for (let j = 0; j < i; j++)
            left_sum += arr[j];

        //Finding right sum
        for (let k = i + 1; k < N; k++)
            right_sum += arr[k];

        if (left_sum == right_sum) {
            position = i + 1;
            break;
        }
    }
    console.log(position);
}