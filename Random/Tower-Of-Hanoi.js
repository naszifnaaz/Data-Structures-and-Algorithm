function towerOfHanoi(n,from,to,via)
{
    if(n == 0)
        return;
    
    towerOfHanoi(n-1,from,via,to);
    console.log(`Move Disk ${n} from ${from} to ${to}`);
    towerOfHanoi(n-1,via,to,from);
}

//Sample Input
let n = 4;
towerOfHanoi(n,"A","C","B");