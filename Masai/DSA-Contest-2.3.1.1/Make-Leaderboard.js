/*
https://oj.masaischool.com/contest/2780/problem/03
*/

function makeLeaderboard(n,names,marks)
{
    //Organizing names in alphabetical order
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n - 1 - i; j++)
        {
            if(names[j] > names[j+1])
            {
                swap(j,j+1,names);
                swap(j,j+1,marks);
            }
        }
    }

    //Organising marks in descending order

    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n - 1 - i; j++)
        {
            if(marks[j] < marks[j+1])
            {
                swap(j,j+1,marks);
                swap(j,j+1,names);
            }
        }
    }

    //Making Leaderboard
    var rank = 1;
    var count = 0;
    var prev = -1;
    for(let i = 0; i < n; i++)
    {

        if(marks[i] == prev)
        {
            console.log(rank,names[i]);
        }
        else
        {
            rank = rank + count;
            console.log(rank, names[i]);
            count = 0;
        }  
        prev = marks[i];
        count++;
    }

}

//Swap Function
function swap(start,end,arr)
{
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

//Sample Input
var n = 6;
var names = ["rancho","chatur","raju","farhan","virus","joy"];
var marks = [45,32,30,28,32,45];
makeLeaderboard(n,names,marks);

/*
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45
*/