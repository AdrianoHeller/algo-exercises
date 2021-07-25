/**
 * 
 * @param A: list or Array 
 * @returns N a Smallest Positive Integer not in A  
 */

const solution = A => {
    if(typeof A === 'object' && A instanceof Array  && (A.length > 0)){
        const sortedA = A.sort((a,b) => a - b);
        const min = Math.ceil(sortedA[0]);
        const minPositive = Math.sign(min) === 1 ? true : false;
        const max = Math.floor(sortedA[sortedA.length - 1]);
        const maxPositive = Math.sign(max) === 1 ? true : false;
        const validRange = sortedA.length > 1 && sortedA.length < 100000 ? true : false;
        if(typeof sortedA === 'object' && sortedA instanceof Array && validRange){
            const randomNumber = Math.floor(Math.random() * (max - min) + min);
            const validNumbers = sortedA.filter(item => (-1000000 < item) && (item < 1000000));
            if((!validNumbers.includes(randomNumber)) && (randomNumber > validNumbers[0]) && (randomNumber < validNumbers[validNumbers.length - 1])){
                return randomNumber;
            }else{
                return validNumbers[validNumbers.length - 1] + 1;
            }
        }else{
            return false;
        }        
    }else{
        return false;
    }
};

