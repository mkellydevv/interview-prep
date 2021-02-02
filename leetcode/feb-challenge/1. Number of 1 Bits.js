// Number of 1 Bits

function hammingWeight(n) {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        if (n % 2 !== 0)
            count++;
        n = n >> 1;
    }
    return count;
}

//console.log(hammingWeight(0b00000000000000000000000000001011));
//console.log(hammingWeight(0b11111111111111111111111111111101));
