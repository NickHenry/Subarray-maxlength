console.log("maxLength returns: ", maxLength([3,1,2,3], 4));

function maxLength(a, k) {
    let subarray = [];
  	const length = a.length;
    
  	// we loop through all the items in the array
    for (let index = 0; index <= length; index++) {
    	// loop through the rest of the items after the one we are at
    	for (let restOfTheItems = index + 1; restOfTheItems <= length; restOfTheItems++) {
            const currentSubArray = a.slice(index, restOfTheItems);
            const sumOfArray = getSumOfArray(currentSubArray);
           	
            // is our current subarray bigger than the previous set && are we not over the sum limit
            if (currentSubArray.length > subarray.length && sumOfArray <= k) {
                subarray = currentSubArray;
            }
        }
    }
    return subarray.length;
}

function getSumOfArray(array) {
  return array.reduce((total, item) => total + item, 0);
}
