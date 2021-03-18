function mySplice(arr1, arr2, n){
    var arr1v2 = arr1.slice();
    var arr2 = arr2.slice();

    for (var i = 0; i < arr1.length; i++) {
        arr2.splice(n, 0, arr1v2[i]);
    }
    return arr2;
}

console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice;