// 450. Delete Node in a BST
// #medium #aa #bst
// Time    : O(n) where n is height of tree
// Space   : O(1)
// Runtime : 96ms,   beats 99.67%
// Memory  : 47.1mb, beats 84.54%
// The algorithm does a simple binary search to find the target
// node in the tree.  From there, it removes it and shifts
// around the nodes based on the children the removed node had.
// A root parent is created to make dealing with root deletions
// easier.

function deleteNode(root, target) {
    const rootPar = new TreeNode(null, root);
    let ptr = root;
    let ptrPar = rootPar;

    while (ptr) {
        if (ptr.val > target) {
            ptrPar = ptr;
            ptr = ptr.left
        }
        else if (ptr.val < target) {
            ptrPar = ptr;
            ptr = ptr.right;
        }
        else
            break;
    }

    if (ptr) {
        let dir;
        if (ptrPar.left === ptr) dir = 'left';
        else dir = 'right';

        if (ptr.left && ptr.right) {
            if (!ptr.right.left) {
                ptr.right.left = ptr.left;
                ptrPar[dir] = ptr.right;
            }
            else {
                let tmpPtr = ptr.right.left;
                let tmpPar = ptr.right;
                while (tmpPtr.left) {
                    tmpPar = tmpPtr;
                    tmpPtr = tmpPtr.left;
                }
                tmpPar.left = tmpPtr.right;
                tmpPtr.left = ptr.left;
                tmpPtr.right = ptr.right;
                ptrPar[dir] = tmpPtr;
            }
        }
        else if (ptr.left)
            ptrPar[dir] = ptr.left;
        else if (ptr.right)
            ptrPar[dir] = ptr.right;
        else
            ptrPar[dir] = null;
    }

    return rootPar.left;
}
