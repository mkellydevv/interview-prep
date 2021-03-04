// 160. Intersection of Two Linked Lists
// #easy #linkedlist #pointers
// Time    : O(n)
// Space   : O(1)
// Runtime : 92ms, beats 99.43%
// Memory  : 46mb, beats 63.98%
// The algorithm iterates over the two linked lists looking for an
// intersection.  When the each list reaches null, it connects its,
// tail to the other's head and continues iterating.  They should
// either meet at the intersection or finish at the tail together.
// Ex.
// a->b->c->d ->e->f->g->c->d
// e->f->g->c->d ->a->b->c->d

function getIntersectionNode(headA, headB) {
    let a = headA;
    let b = headB;
    while (a !== b) {
        if (a === null)
            a = headB;
        else
            a = a.next;
        if (b === null)
            b = headA;
        else
            b = b.next;
    }
    return a;
}
