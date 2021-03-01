// 575. Distribute Candies
// #easy #set
// Time    : O(n)
// Space   : O(n)
// Runtime : 80ms,   beats 90.21%
// Memory  : 40.9mb, beats 24.02%
// The algorithm iterates over the array and keeps track of what it has seen
// before.  It returns the min of types / 2 and the number of types.

function distributeCandies(types) {
    const set = new Set();
    for (let i = 0; i < types.length; i++)
        set.add(types[i]);
    return Math.min(types.length >> 1, set.size);
}
