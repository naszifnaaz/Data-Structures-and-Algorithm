/*
https://oj.masaischool.com/contest/2543/problem/301
*/

function subarrayQuest(size,arr)
{
    var count = 0;
    for(let i = 0; i < size; i++)
    {
        for(let j = i; j < size; j++)
        {
            if((arr[i] % 2 != 0) && (arr[j] % 2 != 0))
                count++;
        }
    }
    console.log(count);
}

var size = 5;
var arr = [1,2,3,4,5];
subarrayQuest(size,arr);