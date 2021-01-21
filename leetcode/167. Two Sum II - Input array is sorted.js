// 167. Two Sum II - Input array is sorted
// #easy #array #binarysearch #pointers
// Binary Search Method
// Time    : O(n*log(n))
// Space   : O(1)
// Runtime : 76ms,   beats 89.43%
// Memory  : 39.1mb, beats 22.76%
// The algorithm is similar to the following algorithm, except for when it comes
// to the increment/decrement statements.  Instead, this function does a binary
// search to find the next value to check.  This is useful when there are many
// duplicates in the array.

// Increment/Decrement Method
// Time    : O(n)
// Space   : O(1)
// Runtime : 72ms,   beats 97.26%
// Memory  : 38.8mb, beats 71.80%
// The algorithm has ptrs at the start and end and increments or decrements one
// pointer at a time based on if the sum of the values of the ptrs is less than
// or greater than the target.

// Binary search
function twoSum1(nums, tar) {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        let sum = nums[i] + nums[j];
        let start = i;
        let end = j;

        if (sum > tar) {
            // Binary search instead of decrement
            let curr = nums[j];
            while (nums[j] === curr) {
                let mid = Math.floor((end - start) / 2 + start);
                if (nums[j] > nums[mid])
                    start = mid + 1;
                else {
                    end = mid - 1;
                    j = end;
                }
            }
        } else if (sum < tar) {
            // Binary search instead of increment
            let curr = nums[i];
            while (nums[i] === curr) {
                let mid = Math.floor((end - start) / 2 + start);
                if (nums[i] < nums[mid])
                    end = mid - 1;
                else {
                    start = mid + 1;
                    i = start;
                }
            }
        } else
            return [++i, ++j];
    }
}

// Increment/Decrement Pointers
function twoSum2(nums, tar) {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        let sum = nums[i] + nums[j];
        if (sum > tar)
            j--;
        else if (sum < tar)
            i++;
        else
            return [++i, ++j];
    }
    return null;
}

// [12,13,23,28,43,44,59,60,61,68,70,86,88,92,124,125,136,168,173,173,180,199,212,221,227,230,277,282,306,314,316,321,325,328,336,337,363,365,368,370,370,371,375,384,387,394,400,404,414,422,422,427,430,435,457,493,506,527,531,538,541,546,568,583,585,587,650,652,677,691,730,737,740,751,755,764,778,783,785,789,794,803,809,815,847,858,863,863,874,887,896,916,920,926,927,930,933,957,981,997]
// 542
// => [24,32] 221 321
