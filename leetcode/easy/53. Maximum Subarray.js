// 53. Maximum Subarray
// #easy #array
// Time    : O(n)
// Space   : O(1)
// Runtime : 68ms,   beats 97.46%
// Memory  : 38.4mb, beats 73.05%
// Generates each row of the pyramid by examining the row above it. The top and
// edges are hardcoded to 1.  Each new el is calculated based on its up/left and
// up neighbors.

function maxSubArray(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        max = Math.max(nums[i], max);
    }
    return max;
}
