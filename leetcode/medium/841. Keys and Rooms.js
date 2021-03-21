// 841. Keys and Rooms
// #medium #dfs #graph #set
// Time    : O(n + e) where n is arr.length and e is total # of keys
// Space   : O(n)
// Runtime : 76ms,  beats 97.02%
// Memory  : 3.9mb, beats 43.90%
// The algorithm is a simple graph dfs traversal.

function canVisitAllRooms(arr) {
    const visited = new Set([0]);
    const stack = [0];

    while (stack.length) {
        const keys = arr[stack.pop()];
        for (let key of keys) {
            if (!visited.has(key)) {
                visited.add(key);
                stack.push(key);
            }
        }
    }

    return visited.size === arr.length;
}
