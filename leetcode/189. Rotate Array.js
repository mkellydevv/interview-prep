// 189. Rotate Array
// #medium #array #aa
// Time    : O(n)
// Space   : O(1)
// Runtime : 84ms,   beats 91.00%
// Memory  : 39.5mb, beats 77.84%
// The algorithm modifies the array in place through indexing.  Iterates over the
// array storing the previous value in the slot, and storing the overridden value
// in the next slot until n iterations.

function rotate(arr, num) {
    let rNum = num % arr.length;
    if (arr.length % 2 === 0) {
        let prev = arr[0];  // Keeps track of previous value
        let start = 0;      // Keeps track of the starting index
        let ptr = 0;        // Keeps track of the current index
        for (let i = 0; i < arr.length; i++) {
            ptr = (ptr + rNum) % arr.length;
            if (ptr === start) {
                arr[ptr] = prev;
                start = ++ptr;
                prev = arr[ptr];
            } else {
                let tmp = prev;
                prev = arr[ptr];
                arr[ptr] = tmp;
            }
        }
    } else {
        let prev = arr[0];
        let ptr = 0;
        for (let i = 0; i < arr.length; i++) {
            ptr = (ptr + rNum) % arr.length;
            let tmp = prev;
            prev = arr[ptr];
            arr[ptr] = tmp;
        }
    }
}
