// 207. Course Schedule
// #medium #aa #backtracking #dfs #map #set
// Time    : O(v + e)?
// Space   : O(v + e)?
// Runtime : 84ms, beats 97.90%
// Memory  : 43mb, beats 79.80%
// The algorithm first populates an adjacency list so we can more easily
// traverse the graph.  The adjList is iterated over and a dfs is called
// on each course with backtracking to keep track if we have already
// seen a node while exploring a path.

function canFinish(numCourses, prereqs) {
    const courses = {};
    const visiting = {};

    // Populate adjacency list
    for (let pre of prereqs) {
        if (courses[pre[0]])
            courses[pre[0]].add(p[1]);
        else
            courses[pre[0]] = new Set([pre[1]]);
    }

    // Check that each can course can be completed
    for (let course in courses) {
        if (dfs(courses, course, visiting))
            return false;
    }
    return true;
}

function dfs(courses, course, visiting) {
    if (visiting[course] !== undefined)
        return visiting[course];

    if (courses[course]) {
        visiting[course] = true;

        for (let prereq of courses[course]) {
            if (dfs(courses, prereq, visiting))
                return true;
        }

        visiting[course] = false;
    }

    return false;
}
