/*
Jim and Pam are inviting friends for a party. But, they want to invite only those friends who have helped them in any way. So, they have made two arrays, indicating the number of people they have taken help from. Each person, has been assigned a unique ID, in the form of a number.

Both, Jim and Pam make their separate invite listAandBbased on the number of people, they have taken help from. Find out if the lists created by the two of them are same or not.

Note: A person might have helped them multiple times, and obviously would be invited only once


Sample Input 2 
5
1 2 2 3 4 
6
1 2 3 4 5 5

Sample Output 2
No
*/

function partyPlanning(N, PamID, M, JimID) {
    let obj = {};
    for (let i = 0; i < N; i++) {
        if (obj[PamID[i]])
            obj[PamID[i]] += 1;
        else
            obj[PamID[i]] = 1;
    }

    let flag = true;

    for (let i = 0; i < M; i++) {
        if (!obj[JimID[i]]) {
            flag = false;
            break;
        }

    }

    if (flag)
        console.log('Yes');
    else
        console.log('No');
}