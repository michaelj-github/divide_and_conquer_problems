function findRotatedIndex(anArray, aValue) {
    if (anArray.length === 0) return -1;
    let startIdx;
    let endIdx;
    let midIdx;

    let theRotationIdx = findTheRotationIdx(anArray);
    if (aValue === anArray[theRotationIdx - 1]) {
        return theRotationIdx - 1;
    } else if (aValue < anArray[theRotationIdx - 1] && aValue >= anArray[0]) {
        startIdx = 0;
        endIdx = theRotationIdx - 1;
    } else {
        startIdx = theRotationIdx - 1;
        endIdx = anArray.length - 1;
    }
    
    while (startIdx <= endIdx) {
        midIdx = Math.floor((startIdx + endIdx) / 2);
        if (anArray[midIdx] === aValue) {
            return midIdx;
        } else if (aValue < anArray[midIdx]) {
            endIdx = midIdx - 1;
        } else {
            startIdx = midIdx + 1;
        }
    }   
    return -1;

}

function findTheRotationIdx(anArray) {
    if (anArray.length === 1 || anArray[0] < anArray[anArray.length - 1]) return 0;
    let startIdx = 0
    let endIdx = anArray.length - 1;
    while (startIdx <= endIdx) {
        midIdx = Math.floor((startIdx + endIdx) / 2);
        if (anArray[midIdx] > anArray[midIdx + 1]) {
            return midIdx + 1;
        } else if (anArray[startIdx] < anArray[midIdx]) {
            startIdx = midIdx + 1;
        } else {
            endIdx = midIdx - 1;
        }
}
}

// console.log(findRotatedIndex([3,4,1,2],4) === 1);
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) === 2);
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) === 6);
// console.log(findRotatedIndex([37,44,66,102,10,22],14) === -1);
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) === -1);


module.exports = findRotatedIndex