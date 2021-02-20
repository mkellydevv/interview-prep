// 413. Arithmetic Slices
// #medium #math
// Time    : O(n)
// Space   : O(1)
// Runtime : 60ms,   beats 100.00%
// Memory  : 38.4mb, beats 73.96%
// This algorithm uses a triangular number to determine the number of slices
// you can make from a given arithmetic sequence of n length.

function numberOfArithmeticSlices(arr) {
    if (arr.length < 3)
        return 0;

    let slices = 0;
    let seqLen = 0;
    let diff;
    for (let i = 1; i < arr.length; i++, seqLen++) {
        if (arr[i] - arr[i - 1] !== diff) {
            slices += (seqLen ** 2 + seqLen) / 2;
            diff = arr[i] - arr[i - 1];
            seqLen = -1;
        }
    }
    if (seqLen)
        slices += (seqLen ** 2 + seqLen) / 2;

    return slices;
}
