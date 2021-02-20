// 11. Container With Most Water
// #medium #pointers
// Time    : O(n)
// Space   : O(1)
// Runtime : 76ms,   beats 95.76%%
// Memory  : 41.1mb, beats 39.99%
// The algorithm increments the index of the lesser of the left and right
// values.  This ensures that you will check every possible greater value,
// as left and right converge.

function maxArea(arr) {
    let i = 0;
    let j = arr.length - 1;
    let max = 0;
    while (i < j) {
        max = Math.max(max, Math.min(arr[i], arr[j]) * (j - i));
        if (arr[i] < arr[j])
            i++;
        else
            j--;
    }
    return max;
}
