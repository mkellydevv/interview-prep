// 53. Maximum Subarray
// #easy #array
// Time    : O(n)
// Space   : O(1)
// Runtime : 76ms,   beats 96.24%
// Memory  : 39.1mb, beats 65.96%
// The algorithm keeps track of the largest subarray max at each given element
// by determining if the element + its left neighbor is larger than itself. It
// keeps track of the largest element seen as it iterates.

function maxSubArray(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        max = Math.max(nums[i], max);
    }
    return max;
}
