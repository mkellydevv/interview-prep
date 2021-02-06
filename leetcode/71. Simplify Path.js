// 71. Simplify Path
// #easy #stack
// Time    : O(n)
// Space   : O(n)
// Runtime : 76ms,   beats 98.98%
// Memory  : 39.9mb, beats 87.07%
// The algorithm iterates through the path 1 char at a time, building
// subStrings along the way.  When it hits a '/', it determines what to do
// with a subString.

function simplifyPath(path) {
    const stack = [];

    let sub = 1;
    for (let i = 1; i < path.length; i++) {
        if (path[i] === '/') {
            sub = path.slice(sub, i);
            if (sub === '..')
                stack.pop();
            else if (sub && sub !== '.')
                stack.push(sub);
            sub = i + 1;
        }
    }
    // Take care of last subStr
    sub = path.slice(sub);
    if (sub === '..')
        stack.pop();
    else if (sub && sub !== '.')
        stack.push(sub);

    return '/' + stack.join('/');
}
