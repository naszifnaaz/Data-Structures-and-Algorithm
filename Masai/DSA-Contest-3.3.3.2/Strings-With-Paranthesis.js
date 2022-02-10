/*
https://oj.masaischool.com/contest/2938/problem/04
*/

function stringWithParenthesis(str)
{
    var bag = "";
    //Removing characters from the string
    for(let i = 0; i < str.length; i++)
    {
        if(str[i] >= 'a' && str[i] <= 'z' || str[i] == " ")
            continue;
        else
            bag += str[i];
    }
    console.log(bag);

    var brackets = {
        "]" : "[",
        ")" : "(",
        "}" : "{"
    }

    var stack = [];

    for(let i = 0; i < bag.length; i++)
    {
        if(bag[i] == "(" || bag[i] == "[" || bag[i] == "{")
            stack.push(bag[i]);
        
        else
        {
            if(brackets[bag[i]] == stack[stack.length - 1])
                stack.pop();
            else
            {
                // flag = false;
                stack.push(bag[i]);
            }
        }
    }

    if(stack.length == 0)
        console.log("balanced");
    else
        console.log("unbalanced");
    
    
}


//Sample Input
stringWithParenthesis("[one [two [three [four [five [six [seven [eight [nine [ten ]]]]]]]]]]")
stringWithParenthesis("(((((((((())))))))))");
stringWithParenthesis("[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]");
