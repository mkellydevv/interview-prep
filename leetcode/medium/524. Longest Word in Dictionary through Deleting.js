// 524. Longest Word in Dictionary through Deleting
// #medium #pointers
// Time    : O(m * n) where m is the len of str and n is avg len of word in dict
// Space   : O(m) in case of ret being the same length as str
// Runtime : 80ms,   beats 100.00%
// Memory  : 44.1mb, beats 80.87%
// The algorithm iterates over each word in the dictionary and compares it to
// the input string one letter at a time. Could be improved by storing previously
// seen words for dictionaries with lots of variations of a word.

function findLongestWord(str, dict) {
    let ret = '';

    for (let word of dict) {
        let i = 0;
        let j = 0;

        while (i < str.length) {
            if (str[i] === word[j] && ++j === word.length) {
                if (j > ret.length || (j === ret.length && word < ret))
                    ret = word;
                break;
            }
            i++;
        }
    }

    return ret;
}
