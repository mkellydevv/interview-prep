// 12. Integer to Roman
// #medium #map #math
// Time    : O(log n)
// Space   : O(1), not counting cached data
// Runtime : 144ms,  beats 97.46%
// Memory  : 44.5mb, beats 91.43%
// The algorithm examines each digit place and adds the corresponding
// Roman numeral to the string based on the digits value.

const arr1 = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
const arr2 = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
const arr3 = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
const arr4 = ['', 'M', 'MM', 'MMM'];

function intToRoman(num) {
    let digit = Math.floor(num % 10);
    let retStr = arr1[digit];

    digit = Math.floor((num / 10) % 10);
    retStr = arr2[digit] + retStr;

    digit = Math.floor((num / 100) % 10);
    retStr = arr3[digit] + retStr;

    digit = Math.floor((num / 1000) % 10);
    return arr4[digit] + retStr;
}
