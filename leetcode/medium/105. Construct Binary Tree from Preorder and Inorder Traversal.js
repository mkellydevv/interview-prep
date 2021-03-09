// 105. Construct Binary Tree from Preorder and Inorder Traversal
// #medium #aa #binarytree
// Time    : O(n)
// Space   : O(n)
// Runtime : 84ms,   beats 99.53%
// Memory  : 42.2mb, beats 69.43%
// The algorithm uses the chops up the pre order array into the root node,
// and its left and right subtrees.  It finds the root by looking at the
// start of a preorder subsection and seeing where it falls in the inorder
// array.
// Ex.
// PreOrder [3,9,8,20,15,7] => [3,  9,8,  20,15,7]
// InOrder  [8,9,3,15,20,7] => [8,9,  3,  15,20,7]

function buildTree(preArr, inArr) {
    const map = {};

    for (let i = 0; i < inArr.length; i++)
        map[inArr[i]] = i;

    return rec(preArr, inArr, map, 0, preArr.length - 1, 0);
}

function rec(preArr, inArr, map, i, j, preStart) {
    if (i > j)
        return null;

    const node = new TreeNode(preArr[preStart]);
    const partition = map[preArr[preStart]];

    node.left = rec(preArr, inArr, map, i, partition - 1, preStart + 1);
    node.right = rec(preArr, inArr, map, partition + 1, j, preStart + 1 + (partition - i));

    return node;
}
