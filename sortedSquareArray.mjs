/**
 * 
 * @param array 
 * @returns squared sum over same non null length
 */

const sortedSquaredArray = array => {
    const initial = new Array(array.length).fill(0);
    for(let n = 0; n < array.length; n++){
        let item = array[n];
        initial[n] = item * item;
    };
    const sorted = initial.sort((a,b) => a - b);
    return sorted;
};

const sortedSquaredOp2 = array => {
    const initial = new Array(array.length).fill(0);
    for(let n in array){
        let item = array[n];
        initial[n] = item * item;
    };
    initial.sort((a,b) => a - b);
    return initial;

};

