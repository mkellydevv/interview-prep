// 54. Spiral Matrix
// #medium #matrix #array
// Time    : O(m*n)
// Space   : O(m*n)
// Runtime : 68ms,   beats 96.2%
// Memory  : 38.5mb, beats 40.72%
// The algorithm iterates through a matrix using one main loop for a complete
// circuit. 4 inner loops for the top, bottom rows and left and right columns.

function spiralOrder(mat) {
    let arr = [];
    let i = 0;
    let j = 0;
    let rowStart = -1;
    let rowEnd = mat[0].length;
    let colStart = 0;
    let colEnd = mat.length;
    let finalLength = mat.length * mat[0].length;

    while (true) {
        // Left to Right
        while (j < rowEnd) {
            arr.push(mat[i][j]);
            j++;
        }
        if (arr.length === finalLength)
            return arr;
        i++;
        j--;
        rowEnd--;

        // Top to Bottom
        while (i < colEnd) {
            arr.push(mat[i][j]);
            i++;
        }
        if (arr.length === finalLength)
            return arr;
        j--;
        i--;
        colEnd--;

        // Right to Left
        while (j > rowStart) {
            arr.push(mat[i][j]);
            j--;
        }
        if (arr.length === finalLength)
            return arr;
        i--;
        j++;
        rowStart++;

        // Bottom to Top
        while (i > colStart) {
            arr.push(mat[i][j]);
            i--;
        }
        if (arr.length === finalLength)
            return arr;
        i++;
        j++;
        colStart++;
    }
}
