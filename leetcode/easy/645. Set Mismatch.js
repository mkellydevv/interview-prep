// 645. Set Mismatch
// #easy #array #math #set
// Time    : O(n)
// Space   : O(1)
// Runtime : 80ms,   beats 98.19%
// Memory  : 43.1mb, beats 60.24%
// The algorithm iterates over the array and swaps each element into the index of the matching value.
// If it ever tries to swap in a value that is already in the right index, that is the duplicate.  The
// missing number is found by finding what the totalSum of the array should be using the triangular
// number, and then subtracting (actualSum - duplicate).

function findErrorNums(arr) {
    const tri = (arr.length ** 2 + arr.length) / 2;
    const arrSum = arr.reduce((acc, el) => acc + el);

    let i = 0;
    while (i < arr.length) {
        if (arr[i] && arr[i] !== i) {
            if (arr[arr[i]] === arr[i])
                return [arr[i], tri - (arrSum - arr[i])];
            else
                [arr[arr[i]], arr[i]] = [arr[i], arr[arr[i]]]
        }
        else
            i++;
    }
}

// Time: O(n), Space: O(n)
function findErrorNums(arr) {
    const set = new Set();
    let dup;
    for (let el of arr) {
        if (set.has(el))
            dup = el;
        else
            set.add(el);
    }
    const len = arr.length + 1;
    for (let i = 1; i < len; i++) {
        if (!set.has(i))
            return [dup, i];
    }
}
