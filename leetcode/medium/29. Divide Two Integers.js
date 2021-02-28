// 29. Divide Two Integers
// #medium #bitmanip
// Time    : O(log n)
// Space   : O(1)
// Runtime : 100ms,  beats 73.17%
// Memory  : 39.9mb, beats 90.83%
// The algorithm bitwise shifts the divisor to the left as many times as it
// can while remaining under the dividend.  It subtracts the divisor at this
// point from the dividend and repeats the process until finished.

function divide(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1)
        return 2147483647;
    let quo = 0;
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let sign = -1;
    if (dividend < 0 === divisor < 0)
        sign = 1;

    if (a === b)
        return sign;

    while (a >= b) {
        let div = b;
        let i = 0;
        while (div > 0 && div <= a)
            div = b << ++i;
        a -= b << i - 1;
        quo += 1 << i - 1;
    }

    if (sign > 0)
        return quo;
    return -quo;
}
