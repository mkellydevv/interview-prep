// 581. Shortest Unsorted Continuous Subarray
// #medium #array
// Time    : O(n)
// Space   : O(1)
// Runtime : 88ms, beats 93.19%
// Memory  : 43mb, beats 49.21%
// The algorithm finds the first and last node elements which are out of
// order.  Afterwards, it finds where they would need to be inserted and
// uses these indices as the subsection of the array to be sorted.

function findUnsortedSubarray(arr) {
    const len = arr.length - 1;
    let first;
    let last;

    for (let i = 0; i < len; i++) {
        if (arr[i] > arr[i + 1] && (first === undefined || arr[i + 1] < arr[first]))
            first = i + 1;
    }
    for (let i in arr) {
        if (arr[first] < arr[i]) {
            first = i;
            break;
        }
    }

    for (let i = len; i > -1; i--) {
        if (arr[i - 1] > arr[i] && (last === undefined || arr[i - 1] > arr[last]))
            last = i - 1;
    }
    for (let i = len; i > -1; i--) {
        if (arr[last] > arr[i]) {
            last = i;
            break;
        }
    }

    if (last !== undefined)
        return last - first + 1;
    return 0;
}

// Bad solution, Time: O(n log n), Space: O(n)
function findUnsortedSubarray2(arr) {
    const copy = arr.slice().sort((a, b) => a - b);
    let unsorted = false;
    let start;
    let last;

    for (let i in arr) {
        if (copy[i] === arr[i]) {
            if (unsorted) {
                last = i;
                unsorted = false;
            }
        }
        else {
            if (start === undefined)
                start = i;
            unsorted = true;
        }
    }
    if (arr[arr.length - 1] !== copy[copy.length - 1])
        last = arr.length;

    if (last)
        return last - start;
    return 0;
}
