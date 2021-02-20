// 204. Count Primes
// #easy #math #array #aa
// Time    : O(n log log n)
// Space   : O(n)
// Runtime : 108ms,  beats 96.78%
// Memory  : 51.4mb, beats 63.83%
// The Sieve of Eratosthenes is used to find all primes up to n.  It creates an array
// of size n and iterates over the array to find primes which are unmarked.  When
// a prime is found, it loops again marking all multiples of the prime up to n.
// The time complexity is n*(log(log n)) because n*(1/2 + 1/3 + 1/5 + ...) can be
// proven mathematically using a taylor series expansion.

let memo = new Set([2,3,5,7,11,13]);

function countPrimes(n) {
    let count = 0;
    for (let j = 2; j < n; j++) {
        if (isPrimeMemo(j))
            count++;
    }
    return count;
}

// Sieve of Eratosthenes
function sieve(num) {
    if (num < 3)
        return 0;
    let arr = new Array(num);
    let count = 1;
    for (let i = 3; i < num; i += 2) {
        if (arr[i] === undefined) {
            count++;
            for (let j = i + i; j < num; j += i)
                arr[j] = false;
        }
    }
    return count;
}

// Method using memoization but not an optimal algorithm
function isPrimeMemo(num) {
    if (memo.has(num))
        return true;

    // Primes cant be even when above 2, and can't be less than 2
    if ((num % 2 === 0 && num > 2) || num < 2)
        return false;

    // Iterate over known primes before iterating by 1 in the next loop
    let sqrt = Math.sqrt(num);
    let start;
    for (let el of memo) {
        if (el > sqrt) {
            memo.add(num);
            return true;
        }
        if (num % el === 0)
            return false;
        start = el + 1;
    }

    // Iterate until the sqrt of num.  A num^2 will always be divisible by its square root, so we can stop there.
    for (let i = start; i <= sqrt; i++) {
        if (num % i === 0)
            return false;
    }

    memo.add(num);
    return true;
}

// Naive Method
function isPrime(num) {
    // Primes cant be even when above 2, and can't be less than 2
    if ((num % 2 === 0 && num > 2) || num < 2)
        return false;

    // Iterate until the sqrt of num.  A num^2 will always be divisible by its square root, so we can stop there.
    for (let i = 3, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0)
            return false;
    }

    return true;
}
