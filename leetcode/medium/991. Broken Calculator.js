function brokenCalc(num, tar) {
    if (num > tar)
        return num - tar;

    const set = new Set([num]);
    const stack = [num];
    let step = 0;
    let count = 0;
    while (num !== tar && count < 10) {
        let curr = stack.pop();
        console.log('curr', curr)

        if (curr === tar)
            return step;
        else if (curr === null) {
            step++;
            curr = stack.pop();
            stack.push(null);
        }

        if (!set.has(curr * 2)) {
            set.add(curr * 2);
            stack.push(curr * 2);
        }
        if (!set.has(curr - 1)) {
            set.add(curr - 1);
            stack.push(curr - 1);
        }
        count++;
        console.log(stack)
    }
    console.log('step', step)
    return step;
}

brokenCalc(3, 10);
