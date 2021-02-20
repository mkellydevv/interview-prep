// 1249. Minimum Remove to Make Valid Parentheses
// #medium #stack
// Time    : O(n)
// Space   : O(n)
// Runtime : 88ms,   beats 97.57%
// Memory  : 45.9mb, beats 61.72%
// The algorithm utilizes a stack and a basic balanced brackets solution
// to determine which indices need to be removed.  We track the indices
// because there will be characters that need to remain unchanged among
// the parentheses.

const set = new Set(['(', ')']);
function minRemoveToMakeValid(str) {
    const stack = [];
    const arr = str.split('');

    for (let i = 0; i < str.length; i++) {
        if (set.has(str[i])) {
            if (str[i] === ')' && str[stack[stack.length - 1]] === '(')
                stack.pop();
            else
                stack.push(i);
        }
    }

    for (let el of stack)
        arr[el] = '';
    return arr.join('');
}
