
const nonConstructibleChange = (coins) => {
    let smallestNumber = 1;
    let idx = 0;
    let list = sortItems(coins);

    while(idx < list.length){
        if(list[idx] <= smallestNumber + 1){
            smallestNumber += list[idx];
        } ;
        if(list[idx] > smallestNumber + 1){
            smallestNumber += 1;
            break;
        };
        idx++;
    };
    return smallestNumber;   
      
};

function sortItems(list){
    return list.sort((a,b) => a - b);
};

console.log(nonConstructibleChange(walletOne));


