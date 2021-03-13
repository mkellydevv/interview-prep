// 1461. Check If a String Contains All Binary Codes of Size K
// #medium #string
// Time    : O(n)
// Space   : O(n)
// Runtime : 200ms,  beats 97.62%
// Memory  : 57.5mb, beats 57.14%
// The algorithm iterates over the string adding each subsection of
// length k to a set.  If the set.size ever equals the target, it
// will end early and return true.

function hasAllCodes(str, k) {
    const set = new Set();
    const target = 2 ** k;
    const end = str.length - k + 1;

    for (let i = 0; i < end && set.size !== target; i++)
        set.add(str.slice(i, i + k));

    return set.size === target;
}
