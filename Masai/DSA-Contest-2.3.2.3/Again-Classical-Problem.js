/*
https://oj.masaischool.com/contest/2835/problem/02
*/
function againClassicalProblem(str)
{
    var bracket = {
        "]" : "[",
        "}" : "{",
        ")" : "("
    }
    
    var stack = [];
    var flag = false;
    
    //matching paranthesis
    for(let i = 0; i < str.length; i++)
    {
        if(str[i] == "{" || str[i] == "[" || str[i] == "(")
            stack.push(str[i]);
        else
        {
            if(bracket[str[i]] == stack[stack.length - 1])
                stack.pop();
            else
            {
                flag = false;
                stack.push(str[i]);
            }
        }
    }

    if(stack.length == 0)
        flag = true;
    else
        flag = false;
    
    if(flag)
        console.log("balanced");
    else
        console.log("not balanced");
}

//Sample Input
var str = "{([])}";
againClassicalProblem(str);