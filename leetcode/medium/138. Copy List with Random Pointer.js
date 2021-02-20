// 138. Copy List with Random Pointer
// #medium #linkedlist
// Time    : O(n)
// Space   : O(1) extra space
// Runtime : 72ms,   beats 96.50%
// Memory  : 40.2mb, beats 75.24%
// The algorithm iterates while making a copy of each node and setting
// it to the current node's next.  It then iterates and sets the copy
// nodes' random to the random.next of their parent. Lastly, it
// unmerges the copy linked list from the original.

function copyRandomList(head) {
    if (!head)
        return head;

    let ptr = head;
    while (ptr) {
        ptr.next = new Node(ptr.val, ptr.next);
        ptr = ptr.next.next;
    }

    ptr = head;
    while (ptr) {
        if (ptr.random)
            ptr.next.random = ptr.random.next
        else
            ptr.next.random = null;
        ptr = ptr.next.next;
    }

    ptr = head;
    let headCopy = head.next;
    let ptrCopy = headCopy;
    while (ptr) {
        ptr.next = ptr.next.next;
        ptr = ptr.next;

        if (ptrCopy.next) {
            ptrCopy.next = ptrCopy.next.next;
            ptrCopy = ptrCopy.next;
        }
    }

    return headCopy;
}
