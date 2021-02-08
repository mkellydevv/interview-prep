// 284. Peeking Iterator
// #medium #design
// Time    : O(1)
// Space   : O(1)
// Runtime : 64ms,   beats 100.00%
// Memory  : 38.9mb, beats 92.00%
// The functions call next to store the next peek value.  If next is
// called again, it will call next if peekVal is null, or just reset
// peekVal.


// param {Iterator} iterator
const PeekingIterator = function(iter) {
    this.iterator = iter;
    this.peekVal = null;
};

// return {number}
PeekingIterator.prototype.peek = function() {
    if (this.peekVal)
        return this.peekVal;
    else if (this.iterator.hasNext())
        return this.peekVal = this.iterator.next();
};

// return {number}
PeekingIterator.prototype.next = function() {
    if (this.peekVal) {
        let tmp = this.peekVal;
        this.peekVal = null;
        return tmp;
    }
    else
        return this.iterator.next();
};

// return {boolean}
PeekingIterator.prototype.hasNext = function() {
    if (this.peekVal || this.iterator.hasNext())
        return true;
    return false;
};
