# Leetcode Problems

### Medium
| Problem | Tags |
| --- | --- |
| 11. Container With Most Water | #pointers |
| 15. 3Sum | #array #hashmap #pointers #set #sort |
| 46. Permutations | #aa #recursion |
| 54. Spiral Matrix | #aa #array #matrix |
| 71. Simplify Path | #stack |
| 74. Search a 2D Matrix | #aa #array #binarysearch #matrix |
| 138. Copy List with Random Pointer | #linkedlist |
| 189. Rotate Array | #aa #array |
| 199. Binary Tree Right Side View | #dfs #stack #tree |
| 284. Peeking Iterator | #design |
| 322. Coin Change | #aa #dp #memo #tab |
| 413. Arithmetic Slices | #math |
| 538. Convert BST to Greater Tree | #bst #stack |
| 560. Subarray Sum Equals K | #array #hashmap |
| 669. Trim a Binary Search Tree | #bst #tree |
| 784. Letter Case Permutation | #bottomup |
| 785. Is Graph Bipartite? | #bfs #graph #queue |
| 912. Sort an Array | #sort |
| 1091. Shortest Path in Binary Matrix | #bfs #queue |
| 1249. Minimum Remove to Make Valid Parentheses | #stack |
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
| 242. Valid Anagram | #hashtable #string |
| 349. Intersection of Two Arrays | #aa #array #binarysearch #set #sort |
| 412. Fizz Buzz | #aa |
| 594. Longest Harmonious Subsequence | #hashmap |
| 821. Shortest Distance to a Character | #string |
| 1337. The K Weakest Rows in a Matrix | #array #sort |
| 1342. Number of Steps to Reduce a Number to Zero | #bitmanip |
| 1380. Lucky Numbers in a Matrix | #aa #array #matrix |
---
### February LeetCoding Challenge 2021
| # | Problem |
| --- | --- |
| 1. | 191. Number of 1 Bits |
| 2. | 669. Trim a Binary Search Tree |
| 3. | 141. Linked List Cycle |
| 4. | 594. Longest Harmonious Subsequence |
| 5. | 71. Simplify Path |
| 6. | 199. Binary Tree Right Side View |
| 7. | 821. Shortest Distance to a Character |
| 8. | 284. Peeking Iterator |
| 9. | 538. Convert BST to Greater Tree |
| 10. | 138. Copy List with Random Pointer |
| 11. | 242. Valid Anagram |
| 12. | 1342. Number of Steps to Reduce a Number to Zero |
| 13. | 1091. Shortest Path in Binary Matrix |
| 14. | 785. Is Graph Bipartite? |
| 15. | 1337. The K Weakest Rows in a Matrix |
| 16. | 784. Letter Case Permutation |
| 17. | 11. Container With Most Water |
| 18. | 413. Arithmetic Slices |
| 19. | 1249. Minimum Remove to Make Valid Parentheses |

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
