// 594. Longest Harmonious Subsequence
// #easy #hashmap
// Time    : O(n)
// Space   : O(n)
// Runtime : 100ms,  beats 100.00%
// Memory  : 47.4mb, beats 67.11%
// The algorithm stores the number of times we have seen a num in map as it
// iterates. It compares the # of times weve seen the currNum + lowNum and
// currNum + highNum to the max and stores the highest.

function findLHS(nums) {
    let map = new Map();

    let max = 0;
    for (let num of nums) {
        // Increment # of times num as been seen
        map.set(num, map.get(num) + 1 || 1);

        // Determine if the number of times weve seen the curr num + or -
        //  the next or prev num is greater than max
        if (map.has(num - 1))
            max = Math.max(max, map.get(num) + map.get(num - 1));
        if (map.has(num + 1))
            max = Math.max(max, map.get(num) + map.get(num + 1));
    }

    return max;
}
