// 74. Search a 2D Matrix
// #medium #matrix #array #binarysearch #aa
// Time    : O(log(m) + log(n))
// Space   : O(1)
// Runtime : 72ms,   beats 96.35%
// Memory  : 38.6mb, beats 71.53%
// The algorithm binary searches the first column to find the row in which target
// might be in.  It then binary searches the selected row for the target.

function searchMatrix(mat, tar) {
    // The target must be between the first and last values in the ordered matrix
    if (tar < mat[0][0] || tar > mat[mat.length - 1][mat[0].length - 1])
        return false;

    // Binary search the first column to find the appropriate row
    let start = 0;
    let end = mat.length - 1;
    let lastMid;
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (lastMid === mid)
            break;
        if (mat[mid][0] > tar) {
            end = mid;
            lastMid = mid;
        } else {
            start = mid;
            lastMid = mid;
        }
    }

    // Make sure we search the correct row
    let row = 0;
    if (mat[start][0] <= tar)
        row = start;
    if (mat[end][0] <= tar)
        row = end;

    // Binaray search the row for the value
    start = 0;
    end = mat[row].length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (mat[row][mid] === tar)
            return true;
        if (mat[row][mid] > tar)
            end = mid - 1;
        else
            start = mid + 1;
    }

    return false;
}
