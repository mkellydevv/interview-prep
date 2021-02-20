// 1. Two Sum
// #easy #array #hashmap #aa
// Time    : O(n)
// Space   : O(n)
// Runtime : 72ms,   beats 93.96%
// Memory  : 38.8mb, beats 37.86%
// The algorithm does a singple pass through an array adding and checking for
// complements of the target.

function twoSum(nums, tar) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) !== undefined)
            return [map.get(nums[i]),i];
        map.set(tar - nums[i], i );
    }

    return false;
}
