// 412. Fizz Buzz
// #easy #aa
// Time    : O(n)
// Space   : O(1)
// Runtime : 80ms,   beats 90.21%
// Memory  : 40.9mb, beats 24.02%
// It's fizzbuzz.

function fizzBuzz(n) {
    if (n < 1)
        return [];
    let arr = new Array(n);
    n++;
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0)
                arr[i - 1] = 'FizzBuzz';
            else
                arr[i - 1] = 'Fizz';
        } else if (i % 5 === 0)
            arr[i - 1] = 'Buzz';
        else
            arr[i - 1] = `${i}`;
    }
    return arr;
}
