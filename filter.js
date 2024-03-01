const words = [
    "spray",
    "board",
    "spoon",
    "chair",
    "scissors",
    "teddy",
];

const result  = words.filter((word)=>word.length > 6);
console.log(result);


Array.prototype.myFilter = function(cb) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            output.push(this[i]);
        }
    }
    return output;
};

const res = words.myFilter((word)=>word.length > 6);
console.log(res, "polyfill");

