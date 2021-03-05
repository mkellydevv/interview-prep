// 912. Sort an Array
// #easy #sort
// Time    : O(n*log(n))
// Space   : O(n)
// Runtime : 100ms,  beats 97.52%
// Memory  : 43.8mb, beats 69.80%
// The algorithm is a classic quick sort solution. Ill upload merge sort
// tomorrow.

function sortArray(nums) {
    console.log('unsorted', ...nums)
    nums = mergeSort(nums);
    //quickSort(nums, 0, nums.length - 1);
    console.log('  sorted', ...nums)
    console.log('expected', ...nums.slice().sort((a, b) => a - b));
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

function merge(arr1, arr2) {
    const arr = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j])
            arr.push(arr1[i++]);
        else
            arr.push(arr2[j++]);
    }
    while (i < arr1.length)
        arr.push(arr1[i++]);
    while (j < arr2.length)
        arr.push(arr2[j++]);
    return arr;
}

function mergeSort(arr) {
    if (arr.length < 2)
        return arr;
    const mid = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

/* Merge function that takes O(1) extra space?  Still uses stack space
function merge(arr, beg, mid, end, maxEl) {
    let i = beg;
    let j = mid + 1;
    let k = beg;

    while (i <= mid && j <= end) {
        if (arr[i] % maxEl <= arr[j] % maxEl) {
            arr[k] = arr[k] + (arr[i] % maxEl) * maxEl;
            k++;
            i++;
        }
        else {
            arr[k] = arr[k] + (arr[j] % maxEl) * maxEl;
            k++;
            j++;
        }
    }
    while (i <= mid) {
        arr[k] = arr[k] + (arr[i] % maxEl) * maxEl;
        k++;
        i++;
    }
    while (j <= end) {
        arr[k] = arr[k] + (arr[j] % maxEl) * maxEl;
        k++;
        j++;
    }
    // Obtaining actual values
    for (let i = beg; i <= end; i++)
        arr[i] = Math.floor(arr[i] / maxEl);
}

// Recursive merge sort with extra parameter, maxEl
function mergeSortRec(arr, beg, end, maxEl) {
    if (beg < end) {
        const mid = Math.floor((end - beg) / 2 + beg);
        mergeSortRec(arr, beg, mid, maxEl);
        mergeSortRec(arr, mid + 1, end, maxEl);
        merge(arr, beg, mid, end, maxEl);
    }
}

// This functions finds max element and calls recursive merge sort.
function mergeSort(arr) {
    let maxEl = -Infinity;
    for (let el of arr) {
        if (el > maxEl)
            maxEl = el;
    }
    mergeSortRec(arr, 0, arr.length - 1, maxEl + 1);
}*/

sortArray([999, 612, 589, 856, 56, 945, 243]);
