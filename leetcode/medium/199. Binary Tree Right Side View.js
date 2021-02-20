// 199. Binary Tree Right Side View
// #medium #dfs #stack #tree
// Time    : O(n)
// Space   : O(n)
// Runtime : 76ms,   beats 95.64%
// Memory  : 39.7mb, beats 96.15%
// The algorithm uses a pre-order traversal of a binary tree and pushes
// value of the current node into the return array at the index of the
// depth of the node. Traversal done without using recursion.

// Uses a single array instead of two
function rightSideView(root) {
    const stack = [];
    let tier = 0;

    while (root) {
        stack[tier] = root;

        if (root.left !== null) {
            root = root.left;
            stack[tier++].left = null;
        }
        else if (root.right !== null ) {
            root = root.right;
            stack[tier++].right = null;
        }
        else {
            stack[tier] = stack[tier].val;
            root = stack[--tier];
        }
    }

    return stack;
}

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
