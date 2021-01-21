# Leetcode Problems

### Medium
| Problem | Tags |
| --- | --- |
| 54. Spiral Matrix | #matrix #array #aa |
| 74. Search a 2D Matrix | #matrix #array #binarysearch #aa |
| 189. Rotate Array | #array #aa |

### Easy
| Problem | Tags |
| --- | --- |
| 7. Reverse Integer | #math |
| 9. Palindrome Number | #math #string |
| 118. Pascal's Triangle | #array #aa |
| 204. Count Primes | #math #array #aa |
| 349. Intersection of Two Arrays | #set #array #binarysearch #sort #aa |
| 412. Fizz Buzz | #aa |
| 1380. Lucky Numbers in a Matrix | #matrix #array #aa |

# Notes

```js
// Get # of digits in a number:
function numDigits(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Get nth digit from right:
function getNth(num, i) {
    return Math.floor((num / Math.pow(10, i - 1)) % 10);
}
```
