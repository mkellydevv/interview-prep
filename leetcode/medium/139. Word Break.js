// 139. Word Break
// #medium #dp
// Time    : O(n)
// Space   : O(n)
// Runtime : 68ms,   beats 99.87%
// Memory  : 40.6mb, beats 50.19%
// The algorithm uses dynamic programming to determine at which indices
// a slice of chars exists in the dictionary.  From each end index, it
// searches for more potential slices.
// Example: str = 'applepen', dict = ['app','apple','pen']
// _ a p p l e p e n
// T F F T F T F F F

function wordBreak(str, dict) {
    const table = new Set([0]);
    const len = str.length + 1;

    for (let item of table) {
        for (let j = item; j < len; j++) {
            if (dict.indexOf(str.slice(item, j)) > -1)
                table.add(j);
        }
    }

    return table.has(str.length);
}
