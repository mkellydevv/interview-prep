// 1332. Remove Palindromic Subsequences
// #easy #string
// Time    : O(n)
// Space   : O(1)
// Runtime : 64ms,  beats 97.89%
// Memory  : 38.2b, beats 87.37%
// The algorithm merely has to check if the string itself is a palindrome
// and return 1.  If it is not, because there are only two chars in the
// string, it will always be able to be reduced to 0 after 2 removals.

function removePalindromeSub(s) {
    if (!s.length)
        return 0;

    if (s.length & 1) {
        for (let i = 0, j = s.length - 1; i !== j; i++, j--)
            if (s[i] !== s[j]) return 2;
    }
    else {
        for (let i = 0, j = s.length - 1; i < j; i++, j--)
            if (s[i] !== s[j]) return 2;
    }

    return 1;
}
