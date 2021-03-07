// 820. Short Encoding of Words
// #medium #trie
// Time    : O(sum w[i]) where w[i] is the length of words[i]
// Space   : O(sum w[i])
// Runtime : 144ms,  beats 70.37%
// Memory  : 51.7mb, beats 11.11%
// The algorithm utilizes the trie data structure to store the arr
// of words. It traverses the trie only adding the length of words
// that terminate at an end.

function Node() {
    this.end = false;
    this.map = {};
}

function minimumLengthEncoding(arr) {
    const trie = new Node();
    let totalLen = 0;
    for (let word of arr) {
        let ptr = trie;
        let subtotalLen = 0;
        let offset = 0;
        let overtook = false;
        for (let i = word.length - 1; i > -1; i--) {
            overtook = false;
            if (!ptr.map[word[i]]) {
                if (ptr.end) {
                    offset = subtotalLen;
                    ptr.end = false;
                }
                overtook = true;
                ptr.map[word[i]] = new Node();
            }
            ptr = ptr.map[word[i]];
            subtotalLen++;
        }
        if (overtook) {
            ptr.end = true;
            if (offset) totalLen += subtotalLen - offset;
            else totalLen += subtotalLen + 1;
        }
    }
    return totalLen;
}

minimumLengthEncoding(["t"]);
