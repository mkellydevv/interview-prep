// 538. Convert BST to Greater Tree
// #medium #bst #stack
// Time    : O(n)
// Space   : O(n)
// Runtime : 108ms,  beats 88.89%
// Memory  : 47.7mb, beats 42.74%
// The algorithm traverses the BST to the right as far as it can go,
// pushing nodes it has seen onto the stack. Once it reaches a dead
// end it mutates the node's value and tries to move left.

// Cleaner version from the solutions section
function convertBST(root) {
    const stack = [];
    let sum = 0;
    let ptr = root;

    while (ptr || stack.length) {
        while (ptr) {
            stack.push(ptr);
            ptr = ptr.right;
        }

        ptr = stack.pop();
        sum += ptr.val;
        ptr.val = sum;

        ptr = ptr.left;
    }

    return root;
}

// My code does the same thing as the clean version but with extra
// space used and checks
function convertBST2(root) {
    const map = new Map();
    const stack = [];
    let runningVal = 0;
    let ptr = root;

    while (ptr) {
        if (!map.has(ptr))
            map.set(ptr, 0);

        if (ptr.right && map.get(ptr) < 1) {
            stack.push(ptr);
            map.set(ptr,1);
            ptr = ptr.right;
            continue;
        }

        if (map.get(ptr) < 2) {
            runningVal += ptr.val;
            ptr.val = runningVal;
        }

        if (ptr.left && map.get(ptr) < 2) {
            stack.push(ptr);
            map.set(ptr,2);
            ptr = ptr.left;
            continue;
        }

        ptr = stack.pop();
    }

    return root;
}
