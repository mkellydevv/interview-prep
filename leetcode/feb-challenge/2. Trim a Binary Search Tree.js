// 2. Trim a Binary Search Tree

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
