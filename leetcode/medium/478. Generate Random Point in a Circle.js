// 478. Generate Random Point in a Circle
// #medium #math
// Time    : O(1)
// Space   : O(1)
// Runtime : 160ms,  beats 100.00%
// Memory  : 55.3mb, beats 92.31%
// The algorithm uses mathematical principles to generate a random len
// for the distance from center to a point along the radius. It then
// generates a random angle and uses it in conjunction with the len to
// get the final x, y points. We take the square root of the random num
// to give the points generated a uniform distribution. Not doing so would
// make the lens generated linearly spaced out which clusters them towards
// the center.

class Solution {
    constructor(radius, x_center, y_center) {
        this.r = radius;
        this.x = x_center;
        this.y = y_center;
    }

    randPoint() {
        const len = Math.sqrt(Math.random()) * this.r;
        const theta = 2 * Math.PI * Math.random();
        return [len * Math.cos(theta) + this.x, len * Math.sin(theta) + this.y];
    }
}
