// 242. Valid Anagram
// #easy #hashtable #string
// Time    : O(n)
// Space   : O(1)
// Runtime : 76ms,   beats 99.71%
// Memory  : 39.4mb, beats 99.07%
// The algorithm iterates over both strings and adds or removes seen
// chars from a hash table. Lastly, it checks the hash table for any
// val not equal to 0

function isAnagram(str1, str2) {
    if (str1.length !== str2.length)
        return false;

    let arr = new Array(26).fill(0);

    for (let i = 0; i < str1.length; i++) {
        arr[str1.charCodeAt(i) - 97] += 1;
        arr[str2.charCodeAt(i) - 97] -= 1;
    }

    for (let i = 0; i < 26; i++) {
        if (arr[i])
            return false;
    }

    return true;
}
