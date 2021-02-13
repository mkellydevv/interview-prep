// 1091. Shortest Path in Binary Matrix
// #medium #bfs #queue
// Time    : O(m * n)
// Space   : O(1)
// Runtime : 100ms,  beats 97.53%
// Memory  : 45.9mb, beats 71.60%
// The algorithm implements a simple breadth first search using a queue.
// At each cell, add the current value of the cell + 1 to each of its
// empty neighbors, and push them to the queue.

function shortestPathBinaryMatrix(grid) {
    const endX = grid.length - 1;
    const endY = grid[0].length - 1;

    // Return -1 if starting or ending position are 1
    if (grid[0][0] || grid[endX][endY])
        return -1;

    const queue = [[0, 0]];

    while (queue.length) {
        const [x, y] = queue.shift();
        const count = grid[x][y] + 1;
        const yr = y + 1;
        const yl = y - 1;

        // Right
        if (grid[x][yr] === 0) {
            grid[x][yr] = count;
            queue.push([x, yr]);
        }

        // Left
        if (grid[x][yl] === 0) {
            grid[x][yl] = count;
            queue.push([x, yl]);
        }

        // Up
        if (x > 0) {
            const xu = x - 1;
            if (grid[xu][y] === 0) {
                grid[xu][y] = count;
                queue.push([xu, y]);
            }
            if (grid[xu][yr] === 0) {
                grid[xu][yr] = count;
                queue.push([xu, yr]);
            }
            if (grid[xu][yl] === 0) {
                grid[xu][yl] = count;
                queue.push([xu, yl]);
            }
        }

        // Down
        if (x < endX) {
            const xd = x + 1;
            if (grid[xd][y] === 0) {
                grid[xd][y] = count;
                queue.push([xd, y]);
            }
            if (grid[xd][yr] === 0) {
                grid[xd][yr] = count;
                queue.push([xd, yr]);
            }
            if (grid[xd][yl] === 0) {
                grid[xd][yl] = count;
                queue.push([xd, yl]);
            }
        }
    }

    if (grid[endX][endY] || (grid.length === 1 && grid[0].length === 1))
        return grid[endX][endY] + 1;

    return -1;
}

let arr = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0],
    [1, 0, 1, 1, 1, 0, 0, 0]
];
// let arr = [
//     [0,1,2,3,4,5,6,7],
//     [1,1,X,3,4,5,6,X],
//     [X,2,2,3,4,5,6,7],
//     [3,3,3,3,4,X,X,7],
//     [4,4,X,4,X,5,X,X],
//     [5,5,5,5,5,6,7,0],
//     [6,6,6,X,X,X,8,0],
//     [X,7,X,X,X,0,0,9]
// ];
console.log(shortestPathBinaryMatrix(arr))
