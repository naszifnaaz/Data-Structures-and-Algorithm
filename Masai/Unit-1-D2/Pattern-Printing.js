/*
https://oj.masaischool.com/contest/2543/problem/402
*/

function patternPrinting(N)
{
    for(let i = 1; i <= N; i++)
    {
        var bag = "";
        for(let j = 1; j <= N; j++)
        {
            if(i == N)
                bag += "*";
            else
            {
                if(j == 1 || j == N)
                    bag += "*";
                else
                    bag += " ";
            }
            bag += " ";
        }
        console.log(bag);
    }
}