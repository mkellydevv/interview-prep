// 912. Sort an Array
// #easy #sort
// Time    : O(n*log(n))
// Space   : O(n)
// Runtime : 100ms,  beats 97.52%
// Memory  : 43.8mb, beats 69.80%
// The algorithm is a classic quick sort solution. Ill upload merge sort
// tomorrow.

function sortArray(nums) {
    quickSort(nums, 0, nums.length - 1);

    return nums;
}

function quickSort(nums, low, high) {
    if (low >= high)
        return;

    let index = partition(nums, low, high);

    quickSort(nums, low, index - 1);
    quickSort(nums, index, high);
}

function partition(nums, low, high) {
    let pivot = nums[Math.floor((high - low) / 2) + low];

    while (low <= high) {
        while (nums[low] < pivot)
            low++;
        while (nums[high] > pivot)
            high--;
        if (low <= high) {
            [nums[low], nums[high]] = [nums[high], nums[low]];
            low++;
            high--;
        }
    }

    return low;
}
