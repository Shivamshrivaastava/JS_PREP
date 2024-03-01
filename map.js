const array1 = [1,4,9,16];
const array2 = [3,18,17,19];
Array.prototype.push = function(cb) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(cb(this[i],i ,this));
    }
    return output;
};

const map1 = array1.map((item)=>item *2);
console.log(map1, "default");
const map2 = array2.map((item)=>item *2);

console.log(map2, "polyfill");