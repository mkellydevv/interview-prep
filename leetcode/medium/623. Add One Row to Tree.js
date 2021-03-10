// 623. Add One Row to Tree
// #medium #binarytree
// Time    : O(n)
// Space   : O(x) where x is the length of the targetDepth row
// Runtime : 96ms,   beats 100.00%
// Memory  : 44.8mb, beats 41.33%
// The algorithm does a dfs using a queue up until the targetDepth - 1;
// The nodes to add the new row of nodes to will exist in the queue at
// this point and just need to have the row inserted.

function addOneRow(root, val, targetDepth) {
    const queue = [root, null];
    let currDepth = 2;
    if (targetDepth === 1)
        return new TreeNode(val, root);
    else if (targetDepth == 2)
        queue.pop();
    else {
        while (queue.length) {
            const node = queue.shift();

            if (node) {
                if (node.left)
                    queue.push(node.left);
                if (node.right)
                    queue.push(node.right);
            }
            else {
                if (++currDepth === targetDepth)
                    break;
                queue.push(null);
            }
        }
    }

    for (let node of queue) {
        node.left = new TreeNode(val, node.left);
        node.right = new TreeNode(val, null, node.right);
    }

    return root;
}
