// 322. Coin Change
// #medium #aa #dp #memo #tab
// Time    : O(S * n)
// Space   : O(S)
// Runtime : 116ms,  beats 86.86%
// Memory  : 43.2mb, beats 74.38%
// The problem is solved using tabulation in the first func, and memoization
// in the second func.

// Tabulation
function tab(coins, amount) {
    const max = amount + 1;
    const dp = new Array(max);
    dp[0] = 0;

    for (let i = 1; i < dp.length; i++) {
        dp[i] = max;
        for (let coin of coins) {
            if (coin <= i)
                dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
        }
    }

    return dp[amount] === max ? -1 : dp[amount];
}

// Uses recursion and memoization
function recurse(coins, amount, memo = {}) {
    if (memo[amount])
        return memo[amount];
    if (amount < 0)
        return -1;
    if (amount === 0)
        return 0;

    let fewest = Infinity;
    for (let coin of coins) {
        let res = recurse(coins, amount - coin, memo);

        if (res > -1 && res < fewest)
            fewest = res + 1;
    }

    return memo[amount] = fewest === Infinity ? -1 : fewest;
}
