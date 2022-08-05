function findRotationCount(anArray) {
    if (anArray.length === 0) return -1;
    if (anArray.length === 1 || anArray[0] < anArray[anArray.length - 1]) return 0;
    let startIdx = 0
    let endIdx = anArray.length - 1;
    while (startIdx <= endIdx) {
        midIdx = Math.floor((startIdx + endIdx) / 2);
        if (anArray[midIdx] > anArray[midIdx + 1]) return midIdx + 1;

        if (anArray[midIdx - 1] > anArray[midIdx]) return midIdx;

        if (anArray[startIdx] < anArray[midIdx]) {
            startIdx = midIdx + 1;
        } else {
            endIdx = midIdx - 1;
        }
}    
    return -1;
}

// console.log(findRotationCount([15, 18, 2, 3, 6, 12]) === 2);
// console.log(findRotationCount([7, 9, 11, 12, 5]) === 4);
// console.log(findRotationCount([7, 9, 11, 12, 15]) === 0);

module.exports = findRotationCount