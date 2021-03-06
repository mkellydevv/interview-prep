// 637. Average of Levels in Binary Tree
// #easy #bfs #binarytree #queue
// Time    : O(n)
// Space   : O(m) where m is the the length of the final row
// Runtime : 80ms,   beats 99.08%
// Memory  : 43.1mb, beats 91.95%
// The algorithm does a bfs on the binary tree and keeps track of
// the sum and length of each tier to calculate the avg of the tier.

function averageOfLevels(root) {
    if (!root)
        return null;

    const queue = [root, null];
    const arr = [];
    let sum = 0;
    let tierLen = 1;
    while (true) {
        const node = queue.shift();
        if (node) {
            sum += node.val;

            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        else {
            arr.push(sum / tierLen);
            if (!queue.length)
                break;
            sum = 0;
            tierLen = queue.length;
            queue.push(null);
        }
    }
    return arr;
}

// Solution that doesnt use queue + array.shift()
function averageOfLevels(root) {
    if (!root)
        return null;

    const retArr = [];
    let arr = [root];
    let nextArr = [];
    let sum = 0;
    let i = 0;

    while (arr[i]) {
        sum += arr[i].val;

        if (arr[i].left) nextArr.push(arr[i].left);
        if (arr[i].right) nextArr.push(arr[i].right);

        if (++i === arr.length) {
            retArr.push(sum / arr.length);

            arr = nextArr;
            nextArr = [];
            sum = 0;
            i = 0;
        }
    }

    return retArr;
}
