/*
https://oj.masaischool.com/contest/2439/problem/2
*/

function divisonTask(num)
{
    var x = Math.floor(32 / num);

    if(num == 0)
        console.log("-1");
    else if(x == 0)
        console.log("Too Low");
    else
        console.log(x);
}

divisonTask(4);
divisonTask(0);
divisonTask(64);