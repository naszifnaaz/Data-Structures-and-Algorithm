/*
https://oj.masaischool.com/contest/2454/problem/3
*/

function unitsConsumed(cost)
{
    var units = 0;

    //substracting fixed amount of 80
    cost -= 80;

    //if cost is less than 50 * 3 = 150rs
    if(cost <= 150)
    {
        units += cost / 3;
    }

    //if cost is less than 100 * 5  + 50 * 3 = 500 + 150 = 650
    else if(cost <= 650)
    {
        //slab rates for first 50 units
        units += 50;
        cost -= 150;

        //slab rate for next  50 - 150 units
        units += cost/5;
    }
    else
    {
        //slab rates for first 50 units
        units += 50;
        cost -= 150;

        //slab rate for next  50 - 150 units
        units += 100;
        cost -= 500;

        //slab rate for 150 and above units
        units += cost/10;
    }
    console.log(units);
}

unitsConsumed(455);
unitsConsumed(930);