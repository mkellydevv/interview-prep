// 9. Palindrome Number
// #easy #math #string
// Time    : O(log10(n))
// Space   : O(1)
// Runtime : 204ms,  beats 90.67%
// Memory  : 49.1mb, beats 27.01%
// The mathematical approach compares the first digit to the last digit moving
// inwards.

// Mathematical approach
function isPalindrome(num) {
    if (num < 0)
        return false;
    if (num === 0)
        return true;

    // Count digits in num so we can index in a way
    let digits = Math.floor(Math.log10(num)) + 1;

    if (digits === 1)
        return true;

    // Compare nth digit from right to last digit.
    while (digits > 0) {
        if (Math.floor((num / Math.pow(10, digits - 1)) % 10) !== num % 10)
            return false;
        num = Math.floor(num / 10);
        digits -= 2;
    }

    return true;
}

// String approach (slower)
function isPalindrome2(x) {
    if (x < 0)
        return false;
    if (x === 0)
        return true;

    let arr = [];
    while (x > 0) {
        arr.push(x % 10);
        x = Math.floor(x / 10);
    }

    let len = Math.ceil(arr.length / 2)
    for (let i = 0; i < len; i++) {
        if (arr[i] !== arr[arr.length - 1 - i])
            return false;
    }

    return true;
}
