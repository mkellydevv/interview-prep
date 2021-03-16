// 535. Encode and Decode TinyURL
// #medium #design #map #math
// Time    : O(1)
// Space   : O(n) where n is the number entries inserted into the cache
// Runtime : 80ms, beats 98.67%
// Memory  : 40mb, beats 88.67%
// The algorithm creates a unique id in a base 62 like encoding for a url.
// It stores this encoding into two maps for look up.

const longMap = new Map();
const shortMap = new Map();
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const id = [0,0,0,0,0,-1];

function encode(longUrl) {
    if (longMap.has(longUrl))
        return longMap.get(longUrl);

    let encoding = '';
    let toAdd = true;

    for (let i = id.length - 1; i > -1; i--) {
        if (toAdd) {
            if (id[i] < 61){
                id[i]++;
                toAdd = false;
            }
            else
                id[i] = 0;
        }
        encoding = chars[id[i]] + encoding;
    }

    longMap.set(longUrl, encoding);
    shortMap.set(encoding, longUrl);

    return encoding;
}

function decode(shortUrl) {
    return shortMap.get(shortUrl);
}
