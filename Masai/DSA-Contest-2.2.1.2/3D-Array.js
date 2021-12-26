/*
https://oj.masaischool.com/contest/2644/problem/04
*/

function Array3D(N,M,K,array) {
    for(let i = 0; i < N; i++)
    {
        for(let j = 0; j < M; j++)
        {
            var bag = "";
            for(let k = 0; k < K; k++)
                bag += array[i][j][k] + " ";
            console.log(bag);
        }
    }
}
