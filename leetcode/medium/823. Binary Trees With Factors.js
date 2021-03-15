// 823. Binary Trees With Factors
// #medium #dp #map
// Time    : O(n^2)
// Space   : O(n)
// Runtime : 116ms,  beats 100.00%
// Memory  : 44.5mb, beats 82.00%
// The algorithm uses a bottom up solution where it finds how
// many binary trees can be created from each value.  It sorts
// the arr first so it can find the lesser values first.

function numFactoredBinaryTrees(arr) {
    arr.sort((a, b) => a - b);
    const map = new Map();
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        const end = Math.sqrt(arr[i]);
        let count = 1;
        for (let j = 0; arr[j] <= end; j++) {
            const comp = arr[i] / arr[j];
            if (map.has(comp))
                if (comp === arr[j])
                    count += map.get(comp) * map.get(arr[j]);
                else
                    count += 2 * map.get(comp) * map.get(arr[j]);
        }
        map.set(arr[i], count);
        total += count;
    }

    return total % (10 ** 9 + 7);
}
