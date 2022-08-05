function findFloor(anArray, aValue) {
    if (anArray.length === 0 || anArray[0] >= aValue) return -1;
    if (anArray[anArray.length - 1] < aValue) return anArray[anArray.length - 1];
    let startIdx = 0
    let endIdx = anArray.length - 1;
    let midIdx;
    while (startIdx <= endIdx) {
        midIdx = Math.floor((startIdx + endIdx) / 2);
        if (anArray[midIdx] < aValue && anArray[midIdx + 1] >= aValue) return anArray[midIdx];
        if (anArray[midIdx - 1] < aValue && anArray[midIdx] >= aValue) return anArray[midIdx - 1];
        if (aValue > anArray[midIdx]) {
            startIdx = midIdx + 1;
        } else {
            endIdx = midIdx - 1;
        }
    }
      return
}

// console.log(findFloor([], 0) === -1);
// console.log(findFloor([1], 0) === -1);
// console.log(findFloor([2], 3) === 2);
// console.log(findFloor([2,3,4], 5) === 4);
// console.log(findFloor([1,2,8,10,10,12,19], 9) === 8) // 8
// console.log(findFloor([1,2,8,10,10,12,19], 20) === 19) // 19
// console.log(findFloor([1,2,8,10,10,12,19], 0) === -1) // -1
// console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 5) === 2);

module.exports = findFloor