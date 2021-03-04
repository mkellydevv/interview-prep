// 268. Missing Number
// #easy #array #math
// Time    : O(n)
// Space   : O(1)
// Runtime : 68ms,   beats 99.63%
// Memory  : 40.7mb, beats 88.04%
// The algorithm uses Guass' triangular number to find what the sum
// of all the numbers should be and subtracts the actual sum of the arr
// to get the missing number.

function missingNumber(arr) {
    return ((arr.length ** 2 + arr.length) / 2) - arr.reduce((acc, el) => acc + el);
}

// Swaps as it iterates over the array
// slower
function missingNumber2(arr) {
    const len = arr.length + 1;
    let retVal = len;
    for (let i = 0; i < len; i++) {
        if (arr[i] !== undefined) {
            if (arr[arr[i]] !== arr[i]) {
                [arr[arr[i]], arr[i]] = [arr[i], arr[arr[i]]];
                i--;
            }
        }
        else
            retVal = i;
    }
    return retVal;
}
