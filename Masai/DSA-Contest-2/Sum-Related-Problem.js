/*
https://oj.masaischool.com/contest/2439/problem/1
*/

function sumRelatedProblem(num)
{
    var sum = 0;
    for(let i = 0; i <= num; i++)
    {
        if(i % 2 == 0)
            sum += i;
    }
    console.log(sum);
}

sumRelatedProblem(3);