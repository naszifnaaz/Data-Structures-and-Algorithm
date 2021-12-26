/*
https://oj.masaischool.com/contest/2644/problem/01
*/
function indiaRank(N,countries)
{
    for(let i = 0; i < N; i++)
    {
        if(countries[i] == "India")
            console.log(i+1);
    }
}


var countries = ["Russia","USA","Japan","China","India"];
indiaRank(countries.length,countries);
