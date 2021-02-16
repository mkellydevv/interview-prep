// 1337. The K Weakest Rows in a Matrix
// #easy #array #sort
// Time    : at least O(m log m)
// Space   : O(m)
// Runtime : 72ms,   beats 97.98%
// Memory  : 40.6mb, beats 38.38%
// The algorithm adds up the value of each row, sorts the rows, and returns
// the first k elements.

// Could use binary search to find first 0 in subArr
function kWeakestRows(mat, k) {
    for (let i in mat) {
        for (let j = 1; j < mat[i].length; j++) {
            if (mat[i][j] === 0)
                break;
            mat[i][0]++;
        }
        mat[i][1] = i;
    }

    mat.sort((a, b) => a[0] - b[0]);

    return mat.splice(0, k).map(el => el[1]);
}
