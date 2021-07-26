/**
 * 
 * @param array 
 * @param sum 
 * @returns matched or not by pair
 */
const twoNumSum = (array,sum) => {
    let composedArray = [];
    if (typeof array === 'object' && array instanceof Array && array.length > 2) {
        for (let x = 0; x < array.length - 1; x++) {
            let reference = x;
            let compared = reference + 1;
            composedArray.push([array[reference], array[compared]]);
        };
        const filteredArrayItems = composedArray.filter(item => typeof item !== undefined);
        const summedPairs = filteredArrayItems.filter(array => (array[0] + array[1]) === sum);
        if(summedPairs.length > 0) return summedPairs;
        return false;
    } else {
        return false;
    };    
};


const list = [12, 3, -15, 7, 113];
const sum = 15;

console.log(twoNumSum(list,sum));

