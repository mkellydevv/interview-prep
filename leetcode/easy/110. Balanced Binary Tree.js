// 110. Balanced Binary Tree
// #easy #aa #binarytree #recursion #tree
// Time    : O(n)
// Space   : O(n)
// Runtime : 80ms,   beats 98.74%
// Memory  : 42.9mb, beats 89.86%
// The algorithm recurses from the root and finds the height at each node.  If
// a height difference between two siblings is ever more than 1, it will
// start returning false down the stack.

function isBalanced(root) {
    if (!root)
        return true;
    return recur(root);
}

function recur(root) {
    if (!root)
        return 0;

    let leftHt = isBalanced(root.left);
    let rightHt = isBalanced(root.right);

    if (leftHt === false || rightHt === false)
        return false;

    if (Math.abs(leftHt - rightHt) < 2)
        return Math.max(leftHt, rightHt) + 1;
    return false;
}
