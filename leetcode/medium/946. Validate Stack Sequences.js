// 946. Validate Stack Sequences
// #medium #greedy #stack
// Time    : O(n)
// Space   : O(n)
// Runtime : 76ms,   beats 98.01%
// Memory  : 40.1mb, beats 90.84%
// The algorithm keeps ptrs for the pushed and popped arrays.  It increments i
// and pushes pushed[i], if it can't skip a push or pop() something off of arr.

function validateStackSequences(pushed, popped) {
    const arr = [];
    let i = 0;
    let j = 0;
    while (j !== popped.length) {
        if (pushed[i] === popped[j]) {
            i++;
            j++;
        }
        else if (arr[arr.length - 1] === popped[j]) {
            arr.pop();
            j++;
        }
        else if (i < pushed.length)
            arr.push(pushed[i++]);
        else
            return false;
    }
    return true;
}
