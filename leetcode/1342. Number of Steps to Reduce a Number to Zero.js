// 1342. Number of Steps to Reduce a Number to Zero
// #easy #bitmanip
// Time    : O(log n)
// Space   : O(1)
// Runtime : 68ms,   beats 98.80%
// Memory  : 38.5mb, beats 85.03%
// The algorithm is simple.

function numberOfSteps(num) {
    let count = 0;

    while (num) {
        if (num & 1)
            num--;
        else
            num >>= 1;
        count++;
    }

    return count;
}
