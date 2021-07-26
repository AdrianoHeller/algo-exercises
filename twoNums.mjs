const twoNumSum = (array) => {
    let sum = 0;
    let composedArray = [];
    if(typeof array === 'object' && array instanceof Array && array.length > 2){
        for(let x = 0; x < array.length; x++){
            let reference = x;
            let compared = reference + 2;
            composedArray.push([array[reference],array[compared]]);
            
        };
    return composedArray;    
        
    }else{
        return false;
    };
};


const list = [12,3,-15,7,113];
const sum = 19;

console.log(twoNumSum(list));

