// 991. Broken Calculator
// #medium #greedy
// Time    : O(log n)
// Space   : O(1)
// Runtime : 72ms,   beats 96.67%
// Memory  : 38.3mb, beats 83.33%
// The greedy algorithm starts at target and divides by 2 when even, and adds 1
// when its odd.  It has to subtract by 1 num - target times when num > tar

// greedy, good
function brokenCalc(num, tar) {
    let count = 0;
    while (num < tar) {
        if (tar & 1) {
            tar = ++tar / 2;
            count += 2;
        }
        else {
            tar /= 2;
            count++;
        }
    }
    return count + num - tar;
}

// bfs, queue, bad
function brokenCalc2(num, tar) {
    if (num > tar)
        return num - tar;

    const set = new Set([num]);
    const queue = [num, null];
    let step = 0;

    while (true) {
        const curr = queue.shift();

        if (curr === tar)
            return step;
        else if (curr === null) {
            step++;
            queue.push(null);
        }
        else {
            const dbl = curr * 2;
            const mns = curr - 1;
            if (!set.has(dbl)) {
                if (dbl === tar)
                    return step + 1;
                set.add(dbl);
                queue.push(dbl);
            }
            if (!set.has(mns)) {
                if (mns === tar)
                    return step + 1;
                set.add(mns);
                queue.push(mns);
            }
        }
    }
}

console.log(brokenCalc(1, 1000000000))
