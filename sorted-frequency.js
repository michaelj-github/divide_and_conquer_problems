function sortedFrequency(anArray, aValue) {
    if (anArray[anArray.length - 1] < aValue || anArray.length === 0) return -1; // edge cases
    // find the first aValue
    let lowIdx = 0;
    let highIdx = anArray.length - 1;
    let midIdx;
    let startIdx;
    let endIdx;
    if (anArray[0] === aValue) {
        startIdx = 0;
        } else {
        // find startIdx
        midIdx = Math.floor((highIdx - lowIdx) / 2);
        let x = 0;
        while (highIdx >= lowIdx && !startIdx) {
            x++ // stop runaway
            if (x > anArray.length) {
                console.log("1. error")
                return "error";}
            if (anArray[midIdx] === aValue) {
                if (anArray[midIdx - 1] < aValue) {
                    startIdx = midIdx
                } else { // anArray[midIdx - 1] === aValue, startIdx will be in the lower half so lower the highIdx
                    highIdx = midIdx - 1;
                    midIdx = Math.max(Math.floor((highIdx - lowIdx) / 2) + lowIdx, 0);    
                }
            } else if (anArray[midIdx] > aValue) { // startIdx will be in the lower half so lower the highIdx
                highIdx = midIdx - 1;
                midIdx = Math.max(Math.floor((highIdx - lowIdx) / 2) + lowIdx, 0);    
            } else { // startIdx will be in the upper half so raise the lowIdx
                lowIdx = midIdx + 1;
                midIdx = Math.max(Math.floor((highIdx - lowIdx) / 2) + lowIdx, 0);
            }
            }
        }
        lowIdx = startIdx;
        highIdx = anArray.length - 1;
    if (anArray[anArray.length - 1] === aValue) {
        endIdx = anArray.length - 1;
        } else {
        // find endIdx
        midIdx = Math.floor((highIdx - lowIdx) / 2);
        let x = 0;
        while (highIdx >= lowIdx && !endIdx) {
            x++ // stop runaway
            if (x > anArray.length) {
                console.log("2. error")
                return "error";}
                if (anArray[midIdx] === aValue) {
                    if (anArray[midIdx + 1] > aValue) {
                        endIdx = midIdx
                    } else { // anArray[midIdx + 1] === aValue, startIdx will be in the upper half so raise the lowIdx
                        lowIdx = midIdx + 1;
                        midIdx = Math.max(Math.floor((highIdx - lowIdx) / 2) + lowIdx, 0);
                    }
                } else if (anArray[midIdx] < aValue) { // startIdx will be in the upper half so raise the lowIdx
                    lowIdx = midIdx + 1;
                    midIdx = Math.max(Math.floor((highIdx - lowIdx) / 2) + lowIdx, 0);
                } else { // startIdx will be in the lower half so lower the highIdx
                    highIdx = midIdx - 1;
                    midIdx = Math.max(Math.floor((highIdx - lowIdx) / 2) + lowIdx, 0);    
                }
            }
        }

    return (endIdx - (startIdx - 1)) === 0 ? -1 : endIdx - (startIdx - 1);

}

// console.log(sortedFrequency([1,1,2,2,2,2,3],2) === 4);
// console.log(sortedFrequency([1,1,2,2,2,2,3],3) === 1);
// console.log(sortedFrequency([1,1,2,2,2,2,3],1) === 2);
// console.log(sortedFrequency([1,1,2,2,2,2,3],4) === -1);
// console.log(sortedFrequency([],0) === -1)
// console.log(sortedFrequency([0],0) === 1)
// console.log(sortedFrequency([0],1) === -1)
// console.log(sortedFrequency([1,1,1,2,2,2,2,3],2) === 4);
// console.log(sortedFrequency([1,1,1,2,2,2,2,3],3) === 1);
// console.log(sortedFrequency([1,1,2,2,2,2,2,3],1) === 2);
// console.log(sortedFrequency([1,1,2,2,2,2,3,3],4) === -1);
// console.log(sortedFrequency([1,2,3],2) === 1);
// console.log(sortedFrequency([1,1,2,3],2) === 1);
// console.log(sortedFrequency([1,1,2,3,3,3,3],2) === 1);

module.exports = sortedFrequency