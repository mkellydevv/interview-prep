// 785. Is Graph Bipartite?
// #medium #bfs #graph #queue
// Time    : O(n)
// Space   : O(n)
// Runtime : 72ms,   beats 100.00%
// Memory  : 41.5mb, beats 46.15%
// The algorithm does a breadth first search while using a queue to
// traverse the graph.  For each connected node to the current node,
// it checks to see if it exists in current nodes set, and then adds
// it to the other set if it does not.


function isBipartite(graph) {
    const queue = [0];
    let setA = new Set([0]);
    let setB = new Set();
    let count = 0;

    while (count !== graph.length) {
        while (queue.length) {
            let i = queue.pop();

            if (graph[i] === null)
                continue;

            if (setB.has(i))
                [setA,setB] = [setB,setA];

            for (let num of graph[i]) {
                if (setA.has(num))
                    return false;

                setB.add(num);
                queue.push(num);
            }

            graph[i] = null;
            count++;
        }

        // In case of disjoint graphs
        for (let i = 0; i < graph.length; i++) {
            if (graph[i])
                queue.push(i);
        }
    }

    return true;
}
