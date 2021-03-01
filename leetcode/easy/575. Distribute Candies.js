// 575. Distribute Candies
// #easy #set
// Time    : O(n)
// Space   : O(n)
// Runtime : 124ms,  beats 95.40%
// Memory  : 52.1mb, beats 82.85%
// The algorithm iterates over the array and keeps track of what it has seen
// before.  It returns the min of types / 2 and the number of types.

function distributeCandies(arr) {
    const set = new Set();
    for (let el of arr)
        set.add(el);
    return Math.min(arr.length >> 1, set.size);
}
