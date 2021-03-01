// 895. Maximum Frequency Stack
// #hard #hashmap #stack
// Time    : O(1)
// Space   : O(n) for the stack itself
// Runtime : 308ms,  beats 91.14%
// Memory  : 58.6mb, beats 75.95%
// The FreqStack class keeps track of how many times a value has been inserted
// into the stack in a map. The stack maintains a separate stack for each
// tier/row.
// Ex. [5,7,5,7,4,5] is stored as
// [5]
// [5, 7]
// [5, 7, 4]

class FreqStack {
    constructor() {
        this.stack = [];
        this.map = new Map();
    }

    push(x) {
        this.map.set(x, (this.map.get(x) || 0) + 1);

        if (this.map.get(x) > this.stack.length)
            this.stack.push([x]);
        else
            this.stack[this.map.get(x) - 1].push(x);
    }

    pop() {
        const val = this.stack[this.stack.length - 1].pop();

        if (!this.stack[this.stack.length - 1].length)
            this.stack.pop();

        this.map.set(val, this.map.get(val) - 1)

        return val;
    }
}
