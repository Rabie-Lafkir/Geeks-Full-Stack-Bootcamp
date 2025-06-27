const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

console.log("--- Array to String Conversions ---");

// Using toString() method
const stringFromToString = numbers.toString();
console.log("1. Using toString():", stringFromToString);

// Using join() with different separators
const stringFromJoinPlus = numbers.join("+");
console.log('2. Using join("+"):', stringFromJoinPlus);

const stringFromJoinSpace = numbers.join(" ");
console.log('3. Using join(" "):', stringFromJoinSpace);

const stringFromJoinEmpty = numbers.join("");
console.log('4. Using join(""):', stringFromJoinEmpty);

console.log("\n--- Bubble Sort Implementation ---");

const numbersToSort = [...numbers];
console.log("Original array:", numbersToSort);

// Bubble sort algorithm
for (let i = 0; i < numbersToSort.length - 1; i++) {
    console.log(`\n--- Pass ${i + 1} ---`);
    console.log("Current array:", numbersToSort);
    
    let swapped = false;
    
    for (let j = 0; j < numbersToSort.length - 1 - i; j++) {
        console.log(`Comparing ${numbersToSort[j]} (index ${j}) and ${numbersToSort[j + 1]} (index ${j + 1})`);
        
        // For descending order, swap if current element is smaller than next
        if (numbersToSort[j] < numbersToSort[j + 1]) {
            console.log(`Swapping ${numbersToSort[j]} and ${numbersToSort[j + 1]}`);
            
            // Swap elements using a temporary variable
            const temp = numbersToSort[j];
            numbersToSort[j] = numbersToSort[j + 1];
            numbersToSort[j + 1] = temp;
            
            swapped = true;
            console.log("Array after swap:", numbersToSort);
        }
    }
    
    if (!swapped) {
        console.log("No swaps made - array is now sorted!");
        break;
    }
}

console.log("\nFinal sorted array (descending order):", numbersToSort);