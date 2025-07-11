/**
 * uniqueElements
 * @param {*} array 
 * @returns 
 */
function uniqueElements(array) {
    let unique = [];
    
    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;
        
        for (let j = 0; j < unique.length; j++) {
            if (array[i] === unique[j]) {
                isDuplicate = true;
                break;
            }
        }
        
        if (!isDuplicate) {
            unique.push(array[i]);
        }
    }
    
    return unique;
}

console.log(uniqueElements([1,2,3,3,3,4,5]));
