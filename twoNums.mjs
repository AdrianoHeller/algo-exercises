const twoNumSum = (array,sum) => {
    let reference = 0;
    let compared = reference + 1;
    if(typeof array === 'object' && array instanceof Array && array.length > 2){
        while(compared < array.length - 1){
            const actualItem = array[reference];
            const nextItem = array[compared];
            if( actualItem + nextItem === sum){
                return [actualItem,nextItem]
            }
            reference += 1;
        };
    }else{
        return false;
    };
};


const list = [12,3,-15,7,113];
const sum = 19;

console.log(twoNumSum(list,sum));