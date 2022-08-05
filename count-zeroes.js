function countZeroes(anArray) {
    if (anArray[anArray.length - 1] === 1 || anArray.length === 0) return 0;
    if (anArray[0] === 0) return anArray.length;
    // find the first 0
    let lowIdx = 0;
    let highIdx = anArray.length - 1;
    let midIdx = Math.floor((highIdx - lowIdx) / 2);
    while (highIdx > lowIdx) {
    if (anArray[midIdx] === 0) {
        if (anArray[midIdx - 1] === 1) return anArray.length - midIdx;
        highIdx = midIdx - 1;
        midIdx = Math.max(Math.floor((highIdx - lowIdx) / 2) + lowIdx, 0);
    } else {
        lowIdx = midIdx + 1;
        midIdx = Math.max(Math.floor((highIdx - lowIdx) / 2) + lowIdx, 0);
    }
    }
    return anArray.length - midIdx;
}

// console.log(countZeroes([1,1,1]) === 0);
// console.log(countZeroes([1,1,1,1]) === 0);
// console.log(countZeroes([1,1,1,1,1]) === 0);
// console.log(countZeroes([1,1,1,1,1,0,0,0,0]) === 4);
// console.log(countZeroes([1,1,1,1,0,0,0,0]) === 4);
// console.log(countZeroes([1,1,1,1,0,0,0,0,0]) === 5);
// console.log(countZeroes([1,1,1,1,1,1,1,1,1,0,0,0,0]) === 4);
// console.log(countZeroes([1,1,1,1,1,1,1,1,1,0,0,0,0]) === 4);
// console.log(countZeroes([1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0]) === 9);
// console.log(countZeroes([1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0]) === 10);
// console.log(countZeroes([1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0]) === 11);
// console.log(countZeroes([0,0,0,0]) === 4);
// console.log(countZeroes([0,0,0,0,0]) === 5);
// console.log(countZeroes([]) === 0);
// console.log(countZeroes([0]) === 1);
// console.log(countZeroes([1]) === 0);
// console.log(countZeroes([1,0]) === 1);

module.exports = countZeroes