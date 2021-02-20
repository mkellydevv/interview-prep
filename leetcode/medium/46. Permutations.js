// 46. Permutations
// #medium #aa #recursion
// Time    : O(n!)
// Space   : O(n!)
// Runtime : 84ms,   beats 98.88%
// Memory  : 41.1mb, beats 90.85%
// The algorithm recurses down to the smallest element and returns a new
// array up the call stack that will have the num spliced in at every
// position and then added to the array.

function permute(arr) {
    if (arr.length === 1)
        return [arr];

    let firstPerm = arr.shift();
    let perms = permute(arr);

    let retPerms = [];
    for (let i = 0; i < perms.length; i++) {
        let len = perms[i].length + 1;
        for (let j = 0; j < len; j++) {
            let copy = perms[i].slice();
            copy.splice(j, 0, firstPerm);
            retPerms.push(copy);
        }
    }
    return retPerms;
}
