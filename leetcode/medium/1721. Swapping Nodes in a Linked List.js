// 1721. Swapping Nodes in a Linked List
// #medium #linkedlist
// Time    : O(n)
// Space   : O(1)
// Runtime : 496ms, beats 97.80%
// Memory  : 75mb,  beats 55.75%
// The algorithm iterates over the linked list twice finding the
// the left and right ptr targets. It then swaps them.

function swapNodes(head, k) {
    if (!head || !head.next)
        return head;

    // Create a fake head to make edge cases easier to deal with
    const headPar = new ListNode(null, head);
    let len = 0;
    let leftPar = null;
    let leftPtr = null;
    let rightPar = headPar;
    let rightPtr = head;
    let ptr = head;
    let ptrPar = headPar;

    // Find leftPtr
    while (ptr) {
        if (++len === k) {
            leftPtr = ptr;
            leftPar = ptrPar;
        }
        ptrPar = ptr;
        ptr = ptr.next;
    }

    // Find rightPtr
    const target = len - k;
    let count = 0;
    while (count !== target) {
        rightPar = rightPtr;
        rightPtr = rightPtr.next;
        count++;
    }

    // Edge case
    if (leftPtr === rightPtr)
        return head;

    // Swap pointer names if they crossed
    if (k > len / 2) {
        [rightPar, leftPar] = [leftPar, rightPar];
        [rightPtr, leftPtr] = [leftPtr, rightPtr];
    }

    // Perform actual swap
    const tmp = rightPtr.next;
    leftPar.next = rightPtr;
    if (leftPtr === rightPar)
        rightPtr.next = leftPtr;
    else {
        rightPtr.next = leftPtr.next;
        rightPar.next = leftPtr;
    }
    leftPtr.next = tmp;

    return headPar.next;
}
