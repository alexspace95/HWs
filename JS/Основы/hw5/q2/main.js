let Arr = [];
for (i = 0; i < 100; i++) {
    Arr.push({
        x: Math.round(Math.random() * 100),
        y: Math.round(Math.random() * 100),
        r: Math.ceil(Math.random() * 100),
    })
}

const compareFunction = function(a, b) {
    if (a.r > b.r) {
        return -1;
    }
    if (a.r < b.r) {
        return 1;
    }
    return 0;
};
Arr.sort(compareFunction);
console.log(Arr);
console.log(Arr.slice([0], [10]));