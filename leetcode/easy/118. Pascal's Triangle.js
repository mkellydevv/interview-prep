// 118. Pascal's Triangle
// #easy #array #aa
// Time    : O(n^2)
// Space   : O(n^2) bc storing final result
// Runtime : 68ms,   beats 97.46%
// Memory  : 38.4mb, beats 73.05%
// Generates each row of the pyramid by examining the row above it. The top and
// edges are hardcoded to 1.  Each new el is calculated based on its up/left and
// up neighbors.

function generate(num) {
    let pyr = new Array(num);
    if (num < 1)
        return pyr;
    pyr[0] = [1];
    for (let i = 1; i < num; i++) {
        pyr[i] = new Array(i + 1);
        pyr[i][0] = 1;
        pyr[i][i] = 1;
        for (let j = 1; j < i; j++)
            pyr[i][j] = pyr[i - 1][j - 1] + pyr[i - 1][j];
    }
    return pyr;
}
