// 1201. Ugly Number III
// #medium #binarysearch #math
// Time    : O(log n)
// Space   : O(1)
// Runtime : 68ms,   beats 100.00%
// Memory  : 38.4mb, beats 80.00%
// The algorithm utilizes the idea behind the union of three sets to
// find the count of ugly numbers below a given number.  Using this
// count along side a binary search we can pinpoint when the nth
// ugly number will occur.

function nthUglyNumber(n, a, b, c) {
    let i = 1;
    let j = Math.min(a, b, c) * n;
    let mid;
    let count;

    const ab = lcm(a, b);
    const ac = lcm(a, c);
    const bc = lcm(b, c);
    const abc = lcm(ab, c);

    while (i < j - 1) {
        mid = Math.floor((i + j) / 2);
        count = Math.floor(mid / a) + Math.floor(mid / b) + Math.floor(mid / c) - Math.floor(mid / ab) - Math.floor(mid / bc) - Math.floor(mid / ac) + (Math.floor(mid / abc));

        if (count < n)
            i = mid;
        else
            j = mid;
    }

    mid = i;
    count = Math.floor(mid / a) + Math.floor(mid / b) + Math.floor(mid / c) - Math.floor(mid / ab) - Math.floor(mid / bc) - Math.floor(mid / ac) + (Math.floor(mid / abc));

    if (count === n)
        return i;
    return j;
}

// Least Common Multiple - The smallest number which can be divided by two given numbers.
function lcm(num1, num2) {
    return num1 * num2 / gcd(num1, num2);
}

// Greatest Common Divisor - The biggest number which can divide evenly into both the given numbers.
function gcd(a, b) {
    while (a % b > 0)
        [b, a] = [a % b, b];
    return b;
}
