// 240. Search a 2D Matrix II
// #medium #array #matrix
// Time    : O(m + n)
// Space   : O(1)
// Runtime : 272ms,   beats 98.40%
// Memory  : 41.7mb, beats 77.50%
// The algorithm iterates over a matrix by starting from the top right.
// If the given element is less than target, cut out the entire col.  If
// the current element is less than the target, cut out the row.  It will
// zig zag to the bottom left until it finds the target or the indices go
// out of bounds.

// NOTE: The leetcode test for this problem seems buggy.  Solutions
// that shouldnt be faster appear way faster, and bugs occur that do not
// occur when run locally.

const searchMatrix = (matrix, target) => {
    let col = matrix[0].length - 1;
    let row = 0;
    while (col > -1 && row < matrix.length) {
        if (matrix[row][col] > target)
            col--;
        else if (matrix[row][col] !== target)
            row++;
        else
            return true;
    }
    return false;
}

// let arr = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
// let tar = 20;
// console.log(searchMatrix(arr, tar));


// function searchMatrix(matrix, target) {
//     let min = bSearchRow(matrix[matrix.length - 1], target, 0, matrix[0].length - 1, true);
//     let max = bSearchRow(matrix[0], target, 0, matrix[0].length - 1);

//     while (min <= max) {
//         if (bSearchCol(matrix, min, target))
//             return true;
//         min++;
//     }

//     return false;
// }

// function bSearchRow(arr, target, low, high, isMin) {
//     while (low <= high) {
//         let mid = Math.floor((high - low) / 2) + low;

//         if (arr[mid] < target)
//             low = mid + 1;
//         else if (arr[mid] > target)
//             high = mid - 1;
//         else
//             return mid;
//     }

//     if (low > arr.length - 1)
//         low = arr.length - 1;
//     if (high < 0)
//         high = 0;

//     if (isMin)
//         return arr[high] < target ? low : high;
//     else
//         return arr[low] > target ? high : low;
// }

// function bSearchCol(mat, col, target) {
//     let low = 0;
//     let high = mat.length - 1;
//     while (low <= high) {
//         let mid = Math.floor((high - low) / 2) + low;

//         if (mat[mid][col] < target)
//             low = mid + 1;
//         else if (mat[mid][col] > target)
//             high = mid - 1;
//         else
//             return true;
//     }

//     return false
// }
