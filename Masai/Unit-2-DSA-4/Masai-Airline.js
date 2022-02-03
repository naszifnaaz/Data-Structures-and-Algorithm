/*
https://oj.masaischool.com/contest/2852/problem/04
*/

function masaiAirline(n,checkin,handbag)
{
    for(let i = 0; i < n; i++)
    {
        if(checkin[i] <= 15 && handbag[i] <= 7)
            console.log("Boarding");
        else
            console.log("Stop");
    }
}

//Sample Input
var n = 4;
var checkin = [12,14,15,6];
var handbag = [8,5,7,4];
masaiAirline(n,checkin,handbag);