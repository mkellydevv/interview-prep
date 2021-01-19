// 7. Reverse Integer
// #easy #math
// Time    : O(log10(x))
// Space   : O(1)
// Runtime : 88ms,   beats 95.19%
// Memory  : 40.2mb, beats 65.10%
// The algorithm adds the remainder each iteration to the current reverse value
// multipled by 10. It checks if the current value is greater than MAXINT / 10.

function reverse(num) {
    const max = 214748364; // Max Int: 2,147,483,647
    let reverse = 0;
    let neg = num < 0;

    if (neg)
        num *= -1;

    while (num !== 0) {
        if (reverse > max)
            return 0;
        reverse = reverse * 10 + num % 10;
        num = parseInt(num / 10);
    }

    return neg ? reverse * -1: reverse;
}
