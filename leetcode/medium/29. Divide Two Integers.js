// 29. Divide Two Integers
// #medium #bitmanip
// Time    : O(log n)
// Space   : O(1)
// Runtime : 84ms,  beats 98.81%
// Memory  : 39.7mb, beats 95.76%
// The algorithm bitwise shifts the divisor to the left as many times as it
// can while remaining under the dividend.  It subtracts the divisor at this
// point from the dividend and repeats the process until finished. If the
// dividend is less than the divisor but greater than 0, it will be dropped
// at this point.

function divide(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1)
        return 2147483647;

    let quotient = 0;
    let sign = -1;
    if (dividend < 0 === divisor < 0)
        sign = 1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);


    if (dividend === divisor)
        return sign;

    while (dividend >= divisor) {
        let subtrahend = divisor;
        let i = 0;
        while (subtrahend > 0 && subtrahend <= dividend){
            subtrahend <<= 1;
            i++;
        }
        dividend -= subtrahend >>> 1;
        quotient += 1 << i - 1;
    }

    if (sign > 0)
        return quotient;
    return -quotient;
}
