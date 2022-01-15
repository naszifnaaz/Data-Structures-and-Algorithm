/*
https://oj.masaischool.com/contest/2505/problem/2
*/

function intersectionOfArray(size,arr1,arr2)
{
    for(let i = 0; i < size; i++)
    {
        for(let j = 0; j < size; j++)
        {
            if(arr1[i] == arr2[j])
            {
                console.log(arr1[i]);
                break;
            }
        }
    }
}


//Sample Input
var size = 3;
var arr1 = [4,5,7];
var arr2 = [9,2,5];
intersectionOfArray(size,arr1,arr2);