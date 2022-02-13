/*
https://oj.masaischool.com/contest/3018/problem/03
*/


function mrRobot(min,max,str,ans)
{
    if(min > max)
        return ans;
    else
    {
        let mid = Math.floor((min + max) / 2);
        ans += str[mid] + mrRobot(min,mid -1, str,ans) + mrRobot(mid+1,max,str,ans);
        return ans;
    }
}


//Sample Input
let str = "abcdefghijk";
let min = 0;
let max = str.length - 1;
let ans = "";
let res = mrRobot(min,max,str,ans);
console.log(res);