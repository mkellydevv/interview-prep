// 191. Number of 1 Bits
// #easy #bitmanip
// Time    : O(1)
// Space   : O(1)
// Runtime : 84ms,   beats 91.68%
// Memory  : 40.2mb, beats 35.29%
// The algorithm uses modulo to see if there is a 1 in the final "decimal"
// place. It shifts the number right by 1 bit afterwards and repeats.

function hammingWeight(n) {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        if (n % 2 !== 0)
            count++;
        n = n >> 1;
    }
    return count;
}
