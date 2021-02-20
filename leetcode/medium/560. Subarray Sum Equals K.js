// 560. Subarray Sum Equals K
// #medium #array #hashmap
// Time    : O(n)
// Space   : O(n)
// Runtime : 96ms, beats 95.04%
// Memory  : 48mb, beats 49.06%
// The algorithm uses the concept of a running sum to find if we have seen
// the necessary complement previously and to add it to our current sum
// to equal k.  Every time we see the same running sum, we increment the #
// of times we have seen it.

function subarraySum(nums, k) {
    // Map stores the running sum and the number of times we have seen it
    const map = new Map([[0, 1]]);
    let sum = 0;
    let count = 0;

    for (let num of nums) {
        sum += num;

        if (map.get(sum - k) !== undefined)
            count += map.get(sum - k);

        map.get(sum) === undefined ? map.set(sum, 1) : map.set(sum, map.get(sum) + 1);
    }

    return count;
}
