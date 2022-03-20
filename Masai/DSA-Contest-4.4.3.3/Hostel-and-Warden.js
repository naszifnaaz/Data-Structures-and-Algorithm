/*
https://oj.masaischool.com/contest/3337/problem/05
*/

function hostelWarden(n,students, rooms)
{

    students.sort(function(a,b) {
        return a - b;
    });

    rooms.sort(function(a,b) {
        return a - b;
    });


    let max = -Infinity;

    for(let i = 0; i < n; i++)
    {
        let temp = Math.abs(students[i] - rooms[i]);

        if(temp > max) 
            max = temp;
    }

    console.log(max);
}

//Sample Input
let n = 3;
let students = [4,-4,2];
let rooms = [4,0,5];
hostelWarden(n,students,rooms);