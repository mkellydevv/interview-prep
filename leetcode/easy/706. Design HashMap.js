// 706. Design HashMap
// #easy #map
// Time    : O()
// Space   : O()
// Runtime : 200ms,  beats 56.39%
// Memory  : 48.8mb, beats 43.80%
// The class uses an array to store the data.  Each key is hashed using modulus
// and the current max size of the array.  Each hash value stores room for
// collisions in a sub array. Using a linked list could improve the time
// complexity of each of the methods.
// Note: Runtime is low bc most submissions didn't actually write a real
// hashmap. They used the built in JS object or Map classes.

class MyHashMap {
    constructor(limit = 32) {
        this.count = 0;
        this.limit = limit;
        this.data = new Array(this.limit);
    }

    put(key, val) {
        const hash = key % this.limit;
        if (this.data[hash] === undefined)
            this.data[hash] = [[key, val]];
        else {
            let changed = false;
            for (let i = 0; i < this.data[hash].length; i++) {
                if (this.data[hash][i][0] === key) {
                    this.data[hash][i][1] = val;
                    changed = true;
                    break;
                }
            }
            if (!changed)
                this.data[hash].push([key, val]);
        }

        // Amortize
        if (++this.count === this.limit) {
            this.limit <<= 1;
            this.count = 0;
            const oldData = this.data;
            this.data = new Array(this.limit);
            for (let i = 0; i < oldData.length; i++) {
                if (oldData[i] !== undefined) {
                    for (let j = 0; j < oldData[i].length; j++)
                        this.put(oldData[i][j][0], oldData[i][j][1]);
                }
            }
        }
    }

    get(key) {
        const hash = key % this.limit;
        if (this.data[hash] === undefined)
            return -1;
        for (let i = 0; i < this.data[hash].length; i++) {
            if (this.data[hash][i][0] === key)
                return this.data[hash][i][1];
        }
        return -1;
    }

    remove(key) {
        const hash = key % this.limit;
        if (this.data[hash] === undefined)
            return;
        for (let i = 0; i < this.data[hash].length; i++) {
            if (this.data[hash][i][0] === key) {
                this.data[hash].splice(i,1);
                this.count--;
                break;
            }
        }
    }
}
