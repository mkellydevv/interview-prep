// 669. Trim a Binary Search Tree
// #medium #bst #tree
// Time    : O(log n) (if not degenerative)
// Space   : O(1)
// Runtime : 80ms,   beats 97.98%
// Memory  : 44.4mb, beats 77.73%
// The algorithm iterates down the BST comparing the value at each node
// to the low in one loop and the high in the next loop.

function trimBST(root, low, high) {
    // Trim low
    let ptr = root;
    let par = root;
    while (ptr) {
        if (ptr.val > low) {
            par = ptr;
            ptr = ptr.left;
        }
        else if (ptr.val < low) {
            if (ptr === root) {
                root = ptr.right;
                ptr = root;
            }
            else {
                par.left = ptr.right;
                ptr = ptr.right;
            }
        }
        else if (ptr.val === low) {
            ptr.left = null;
            break;
        }
    }

    // Trim high
    par = root;
    ptr = root;
    while (ptr) {
        if (ptr.val < high) {
            par = ptr;
            ptr = ptr.right;
        }
        else if (ptr.val > high) {
            if (ptr === root) {
                root = ptr.left;
                ptr = root;
            }
            else {
                par.right = ptr.left;
                ptr = ptr.left;
            }
        }
        else if (ptr.val === high) {
            ptr.right = null;
            break;
        }
    }

    return root;
}
