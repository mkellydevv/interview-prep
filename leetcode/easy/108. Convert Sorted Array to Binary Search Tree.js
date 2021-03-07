// 108. Convert Sorted Array to Binary Search Tree
// #easy #aa #array #bst #sort
// Time    : O(n)
// Space   : O(log n)
// Runtime : 80ms,   beats 99.32%
// Memory  : 40.6mb, beats 100.00%
// The algorithm recursively splits the array in half and creates
// a node from the middle value.  It calls rec again on the left
// and right halves of that subsection of the array.

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function sortedArrayToBST(arr) {
    const tempRoot = new TreeNode();
    rec(arr, tempRoot, 0, arr.length - 1);
    return tempRoot.left;
}

function rec(arr, root, i, j, dir = true) {
    if (i > j)
        return root;

    const mid = Math.floor((i+j) / 2);
    const node = new TreeNode(arr[mid]);

    if (dir)
        root.left = node;
    else
        root.right = node;

    rec(arr, node, i, mid - 1);
    rec(arr, node, mid + 1, j, false);

    return root;
}
