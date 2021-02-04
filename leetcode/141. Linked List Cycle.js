// 141. Linked List Cycle
// #easy #linkedlist #pointers
// Time    : O(n)
// Space   : O(1)
// Runtime : 80ms, beats 95.65%
// Memory  : 40mb, beats 99.81%
// The algorithm is Floyd's cycle finding algorithm.  You create a slow ptr and
// a fast ptr.  Slow iterates 1 at a time while fast iterates 2 at a time. If
// there is a cycle, fast will eventually catch up to slow.

// Floyd's Cycle Finding Algorithm
function hasCycle(head) {
    let walker = head;
    let runner = head;

    while (runner !== null && runner.next !== null) {
        walker = walker.next;
        runner = runner.next.next;
        if (walker === runner)
            return true;
    }

    return false;
}
