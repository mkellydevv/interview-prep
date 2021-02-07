// 199. Binary Tree Right Side View
// #medium #dfs #tree
// Time    : O(n)
// Space   : O(n)
// Runtime : 84ms,   beats 77.84%
// Memory  : 39.7mb, beats 96.15%
// The algorithm uses a pre-order traversal of a binary tree and pushes
// value of the current node into the return array at the index of the
// depth of the node. Traversal done without using recursion.

function rightSideView(root) {
    const arr = [];
    const stack = [root];
    let tier = 0;

    while (root) {
        arr[tier] = root.val;

        if (root.left !== null) {
            stack.push(root);           // Push curr node onto stack
            tier++;                     // Increment tier/index
            root = root.left;           // Set ptr to left child node
            stack[tier].left = null;    // Set ptr's parent.left to null
        }
        else if (root.right !== null ) {
            stack.push(root);
            tier++;
            root = root.right;
            stack[tier].right = null;
        }
        else {
            root = stack.pop();
            tier--;
        }
    }

    return arr;
}
