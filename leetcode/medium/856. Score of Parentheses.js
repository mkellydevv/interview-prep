// 856. Score of Parentheses
// #medium #stack
// Time    : O(n)
// Space   : O(n)
// Runtime : 68ms,   beats 98.92% for stack solution
// Memory  : 38.4mb, beats 84.95% for stack solution
// The algorithm uses a stack to store values for pairs of parentheses.
// If a number is wrapped by parentheses, it is multiplied by 2.

// Better solution that uses O(1) space
// Idea: Adds the appropriate value to the score when we see the most
// deeply nested ')' of a grouping
// Index:   0 1 2 3 4 5 6 7
// String:  ( ( ) ( ( ) ) )
// Group1:  ( ( )         )
// Group2:  (     ( ( ) ) )
// Balance: 1 2 1 2 3 2 1 0
// Score:      +2    +4     = 6
function scoreOfParentheses(str) {
    let score = 0;
    let balance = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(')
            balance++;
        else {
            balance--;
            if (str[i - 1] === '(')
                score += 2 ** balance;
        }
    }
    return score;
}

// Uses O(n) space
function scoreOfParentheses(str) {
    const stack = [];

    for (let char of str) {
        if (char === '(')
            stack.push('(');
        else {
            if (typeof stack[stack.length - 1] === 'number') {
                const num = stack.pop() * 2;
                stack.pop();
                stack.push(num);
            }
            else {
                stack.pop();
                stack.push(1);
            }

            if (typeof stack[stack.length - 2] === 'number')
                stack.push(stack.pop() + stack.pop());
        }
    }

    return stack[0];
}
