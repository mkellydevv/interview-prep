# Leetcode Problems

### Medium
| Problem | Tags |
| --- | --- |
| 11. Container With Most Water | #pointers |
| 15. 3Sum | #array #hashmap #pointers #set #sort |
| 46. Permutations | #aa #recursion |
| 54. Spiral Matrix | #aa #array #matrix |
| 74. Search a 2D Matrix | #aa #array #binarysearch #matrix |
| 189. Rotate Array | #aa #array |
| 560. Subarray Sum Equals K | #array #hashmap |
| 669. Trim a Binary Search Tree | #bst #tree |
---
### Easy
| Problem | Tags |
| --- | --- |
| 1. Two Sum | #aa #array #hashmap |
| 7. Reverse Integer | #math |
| 9. Palindrome Number | #math #string |
| 118. Pascal's Triangle | #aa #array  |
| 141. Linked List Cycle | #linkedlist #pointers |
| 167. Two Sum II - Input array is sorted | #array #binarysearch #pointers |
| 191. Number of 1 Bits | #bitmanip |
| 204. Count Primes | #aa #array #math |
| 349. Intersection of Two Arrays | #aa #array #binarysearch #set #sort |
| 412. Fizz Buzz | #aa |
| 1380. Lucky Numbers in a Matrix | #aa #array #matrix |
---
### February LeetCoding Challenge 2021
| # | Problem |
| --- | --- |
| 1. | 191. Number of 1 Bits |
| 2. | 669. Trim a Binary Search Tree |
| 3. | 141. Linked List Cycle |


# Notes

```js
// Get # of digits in a number:
function numDigits(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Get ith digit from right in a number:
function getNth(num, i) {
    return Math.floor((num / Math.pow(10, i - 1)) % 10);
}
```
