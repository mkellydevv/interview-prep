// 349. Intersection of Two Arrays
// #easy #set #array #binarysearch #sort #aa
// Set Solution
// Time    : O(m + n)
// Space   : O(max(m,n))
// Runtime : 76ms,   beats 92.29%
// Memory  : 39.1mb, beats 73.89%
// The algorithm stores the shorter arrays values in a set, then iterates over the
// longer checking of those values are in the set

// Sorting + Binary Search Solution
// Time    : O(n*log(n))
// Space   : O(max(m,n))
// Runtime : 80ms,   beats 79.09%
// Memory  : 40.2mb, beats 43.64%
// The algorithm sorts the arrays, then iterates over the shorter arr1.  A binary
// search is performed on the longer arr2 when a new value is found in arr1.

// Set Solution
function intersection1(nums1, nums2) {
    let ret = [];
    let set = new Set();
    if (Math.max(nums1.length, nums2.length) === nums1.length) {
        let tmp = nums2;
        nums2 = nums1;
        nums1 = tmp;
    }

    // Add shorter array elements to a set
    for (let i = 0; i < nums1.length; i++)
        set.add(nums1[i]);

    for (let i = 0; i < nums2.length; i++) {
        if (set.has(nums2[i])) {
            ret.push(nums2[i]);
            set.delete(nums2[i]);
        }
    }

    return ret;
}

// Sorting + Binary Search Solution
function intersection2(nums1, nums2) {
    if (Math.max(nums1.length, nums2.length) === nums1.length) {
        let tmp = nums2;
        nums2 = nums1;
        nums1 = tmp;
    }

    // Sort arrays so that we can use binary search
    nums1.sort((a, b) => {
        return a - b;
    });
    nums2.sort((a, b) => {
        return a - b;
    });

    let ret = [];
    let curr;
    for (let i = 0; i < nums1.length; i++) {
        // Do a binary search of the other array
        if (nums1[i] !== curr) {
            curr = nums1[i];
            let start = 0;
            let end = nums2.length - 1;
            while (start <= end) {
                let mid = Math.floor(start + (end - start) / 2);
                if (nums1[i] === nums2[mid]) {
                    ret.push(nums1[i]);
                    break;
                }
                else if (nums1[i] > nums2[mid])
                    start = mid + 1;
                else
                    end = mid - 1;
            }
        }
    }

    return ret;
}
