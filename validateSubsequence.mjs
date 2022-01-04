/**
 * 
 * @param array
 * @param sequence 
 * @returns check if an array is a subsequence of the other
 */

function isValidSubsequence(array, sequence) {
    let sequenceIndex = 0;
      for(let num of array){
          if(sequenceIndex === sequence.length) break;
          if(sequence[sequenceIndex] === num) sequenceIndex++;
      }
    return sequenceIndex === sequence.length;
};

function isValidSubsequence(array, sequence) {
    let arrIdx = 0;
      let seqIdx = 0;
      while(arrIdx < array.length && seqIdx < sequence.length){
          if(array[arrIdx] === sequence[seqIdx]) seqIdx++;
          arrIdx++;
      }
      return seqIdx === sequence.length;
  }
  
  