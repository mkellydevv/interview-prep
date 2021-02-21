// 13. Roman to Integer
// #easy #map #set
// Time    : O(n)
// Space   : O(1)
// Runtime : 148ms,  beats 97.45%
// Memory  : 43.7mb, beats 98.48%
// The algorithm iterates over over the string and adds the appropriate
// amount to the sum based on the Roman numeral.

const map = new Map([
    ['V', 5],
    ['L', 50],
    ['D', 500],
    ['M', 1000]
]);
const vx = new Set(['V', 'X']);
const lc = new Set(['L', 'C']);
const dm = new Set(['D', 'M']);
function romanToInt(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'I':
                if (vx.has(str[i + 1]))
                    sum--;
                else
                    sum++;
                break;
            case 'X':
                if (lc.has(str[i + 1]))
                    sum -= 10;
                else
                    sum += 10;
                break;
            case 'C':
                if (dm.has(str[i + 1]))
                    sum -= 100;
                else
                    sum += 100;
                break;
            default:
                sum += map.get(str[i]);
        }
    }
    return sum;
}
