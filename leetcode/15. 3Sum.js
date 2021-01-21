// 15. 3Sum
// #medium #array #hashmap #pointers #set #sort
// Time    : O(n^2)
// Space   : O(n), because we are returning the result
// Runtime : 140ms,  beats 93.31%
// Memory  : 48.8mb, beats 64.23%
// The algorithm iterates over the array while incrementing i. On each iteration,
// it increments/decrements j and k finding all the instances where nums[i] +
// nums[j] + nums[k] equals sum.

// Algorithm uses no extra space beyond retArr
function threeSum(nums, tar = 0) {
    let retArr = [];
    nums.sort((a, b) => {
        return a - b
    });

    let k = 0;
    while (k < nums.length) {
        let i = k + 1;
        let j = nums.length - 1;
        while (i < j) {
            let sum = nums[k] + nums[i] + nums[j];
            if (sum > tar)
                j--;
            else if (sum < tar)
                i++;
            else {
                retArr.push([nums[k], nums[i], nums[j]]);

                // Icrement/Decrement i and j until arr[i] and arr[j] equal new values
                let currI = nums[i];
                let currJ = nums[j]
                while (nums[i] === currI)
                    i++;
                while (nums[j] === currJ)
                    j--;
            }
        }

        // Increment k until arr[k] equals a new value
        let currK = nums[k];
        while (nums[k] === currK)
            k++;
    }

    return retArr;
}

// Algorithm uses a set to track previously found combinations
function threeSum(nums, tar = 0) {
    let ret = [];
    let memo = new Set();
    nums.sort((a, b) => { return a - b });

    for (let k = 0; k < nums.length; k++) {
        let i = k + 1;
        let j = nums.length - 1;
        while (i < j) {
            let sum = nums[k] + nums[i] + nums[j];
            if (sum > tar)
                j--;
            else if (sum < tar)
                i++;
            else {
                if (!memo.has(`${nums[k]},${nums[i]},${nums[j]}`)) {
                    ret.push([nums[k], nums[i], nums[j]]);
                    memo.add(`${nums[k]},${nums[i]},${nums[j]}`)
                }
                i++;
                j--;
            }
        }
    }

    return ret;
}

// Algorithms uses a hashmap to store all 2sum combinations, and a set for
// previously found 3sum combinations
function threeSum(nums, tar = 0) {
    let map = {};
    let retMemo = new Set();
    let retArr = [];

    // Add all 2 sums in the array into map
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (map[nums[i] + nums[j]] === undefined)
                map[nums[i] + nums[j]] = [[i, j]];
            else
                map[nums[i] + nums[j]].push([i, j]);
        }
    }

    // Iterate over arr again looking for complement of arr[i] in map
    for (let i = 0; i < nums.length; i++) {
        if (map[tar - nums[i]] !== undefined) {
            // Each arr holds n sub-arrays of indices that their values add up to the complement of arr[i]
            let arr = map[tar - nums[i]];

            for (let j = 0; j < arr.length; j++) {
                // Do not use an index more than once in a sum
                if (i !== arr[j][0] && i !== arr[j][1]) {
                    // Sort values and store them as strings so they are only added to the retArr once
                    let tmp = [nums[i], nums[arr[j][0]], nums[arr[j][1]]].sort((a, b) => { return a - b })
                    if (retMemo.has(`${tmp[0]},${tmp[1]},${tmp[2]}`) === false) {
                        retArr.push(tmp);
                        retMemo.add(`${tmp[0]},${tmp[1]},${tmp[2]}`);
                    }
                }
            }
        }
    }

    return retArr;
}
