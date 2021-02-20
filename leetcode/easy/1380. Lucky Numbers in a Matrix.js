// 1380. Lucky Numbers in a Matrix
// #easy #matrix #array #aa
// Time    : O(m*n)
// Space   : O(min(m,n))
// Runtime : 68ms,   beats 100%
// Memory  : 41.6mb, beats 26.86%
// The algorithm iterates over the shorter of rows or columns, storing the mins or maxes respectively in
// an array.  It then iterates over columns or rows, looking for maxes or mins, and compares it to the
// stored array.

function luckyNumbers(arr) {
    let luckies = [];
    if (arr[0].length < arr.length) {
        let mins = new Array(arr[0].length);
        // Store the j value for the mins of each row, the order implies the i value
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0, min = Infinity; j < arr[i].length; j++) {
                if (arr[i][j] < min) {
                    min = arr[i][j];
                    mins[i] = j;
                }
            }
        }
        for (let j = 0; j < arr[0].length; j++) {
            let tmpI;
            for (let i = 0, max = -Infinity; i < arr.length; i++) {
                if (arr[i][j] > max) {
                    max = arr[i][j];
                    tmpI = i;
                }
            }
            // If mins[tmpI] === j, the current max in this col matches min in the mins array
            if (mins[tmpI] === j)
                luckies.push(arr[tmpI][j]);
        }
    } else {
        // Mirror the above by checking columns first for maxes.
        let maxs = new Array(arr.length);
        for (let j = 0; j < arr[0].length; j++) {
            for (let i = 0, max = -Infinity; i < arr.length; i++) {
                if (arr[i][j] > max) {
                    max = arr[i][j];
                    maxs[j] = i;
                }
            }
        }
        for (let i = 0; i < arr.length; i++) {
            let tmpJ;
            for (let j = 0, min = Infinity; j < arr[i].length; j++) {
                if (arr[i][j] < min) {
                    min = arr[i][j];
                    tmpJ = j;
                }
            }
            if (maxs[tmpJ] === i)
                luckies.push(arr[i][tmpJ]);
        }
    }

    return luckies;
}
