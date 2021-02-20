// 784. Letter Case Permutation
// #medium #bottomup
// Time    : O(2^n)
// Space   : O(1) extra space
// Runtime : 80ms,   beats 99.57%
// Memory  : 41.4mb, beats 99.14%
// The algorithm is a bottom up approach of building new strings and adding
// them to the return array.  It determines the next new string by adding
// the number outright or the lowercase and uppercase versions to the array.

function letterCasePermutation(str) {
    const arr = [''];

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        let charToAdd;

        if (charCode > 96 && charCode < 123)
            charToAdd = String.fromCharCode(charCode - 32);
        else if (charCode > 64 && charCode < 91)
            charToAdd = String.fromCharCode(charCode + 32);

        if (charToAdd) {
            const len = arr.length;
            for (let j = 0; j < len; j++) {
                arr.push(arr[j] + str[i]);
                arr[j] = arr[j] + charToAdd;
            }
        }
        else {
            for (let j = 0; j < arr.length; j++)
                arr[j] = arr[j] + str[i];
        }
    }

    return arr;
}
