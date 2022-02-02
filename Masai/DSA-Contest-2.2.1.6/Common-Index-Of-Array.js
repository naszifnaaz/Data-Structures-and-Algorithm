/*
https://oj.masaischool.com/contest/2771/problem/06
*/

function commonIndex(n,A,m,B)
{
    var left = 0;
    var right = 0;
    var bag = "";
    var count = 0;
    
    // 1 2 3 4 5 6            3 3 5
    
    while(left < n && right < m)
    {
        if(A[left] < B[right])
            left++;
        else if(A[left] > B[right])
            right++;
        else
        {
            bag += A[left]+ " ";
            left++;
            right++;
        }
            
    }
    
    if(bag == "")
        console.log("-1");
    else
        console.log(bag);
    
}


//Sample Input
var n = 6;
var m = 3;
var arr1 = [1,2,3,4,5,6];
var arr2 = [3,3,5];
commonIndex(n,arr1,m,arr2);