/*
https://oj.masaischool.com/contest/2498/problem/402
*/

function binaryString(N,str)
{
    var max_length = 0;
    var length = 0;
    //Find Substring that contains only 1's
    for(let i = 0; i < N; i++)
    {
        //if the substring starts with 0 we skip it
        if(str[i] == 0)
            continue;
        
        for(let j = i; j < N; j++)
        {
            //if the substring has 0 at any point, we trash it
            if(str[j] == 0)
                break;
            
            //we only have substring that contains 1' at this point
            var bag = "";
            for(let k = i; k <= j; k++)
                bag += str[k];
            
            //Finding max length
            length = bag.length;
            if(length > max_length)
                max_length = length;
        }
    }
    console.log(max_length);
}

//Sample Input
var size = 7;
var str = "1000110";
binaryString(size,str);