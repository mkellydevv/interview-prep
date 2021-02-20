// 821. Shortest Distance to a Character
// #easy #string
// Time    : O(n)
// Space   : O(n)
// Runtime : 80ms,   beats 98.97%
// Memory  : 39.6b, beats 98.97%
// The algorithm iterates until it finds an instance of the char.  When it does,
// it fills in the distance going backwards and stops when it hits the char, or
// when it hits filled array indexes with the same value. Afterwards, it fills
// forward until hitting another instance of char.

function shortestToChar(str, char) {
    const arr = new Array(str.length);
    for (let i = 0; i < arr.length; i++) {
        if (str[i] === char) {
            arr[i] = 0;

            // Fill left
            for (let j = i - 1, count = 1; j > -1; j--, count++) {
                if (str[j] === char)
                    break;
                else if (arr[j] === count - 1 || arr[j] === count)
                    break;
                else
                    arr[j] = count;
            }
            // Fill right
            for (let j = i + 1, count = 1; j < arr.length; j++, count++) {
                if (str[j] === char) {
                    i = j - 1;
                    break;
                }
                else
                    arr[j] = count;
            }
        }
    }
    return arr;
}

console.log(shortestToChar("cizokxcijwbyspcfcqws", 'c'));
