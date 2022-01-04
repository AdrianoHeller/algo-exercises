/**
 * 
 * @param array
 * @param targetSum 
 * @returns array of integers if they accum the correct target sum if added to each other. Else, empty array.
 */

function twoNumberSum(array, targetSum) {
	for(let i = 0; i < array.length; i++){
		const currentItem = array[i];
		for(let j = 1; j < array.length; j++){
			const nextItem = array[j];
			if(currentItem + nextItem === targetSum && currentItem !== nextItem){
				return [currentItem,nextItem];
			}
		}
	}
	return [];
}

exports.twoNumberSum = twoNumberSum;