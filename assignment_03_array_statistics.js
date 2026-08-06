// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// getSum()
// Iterates through the array to compute the total sum.
function getSum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// getAverage()
// Reuses the getSum function and divides by array length.
function getAverage(arr) {
    if (arr.length === 0) return 0;
    return getSum(arr) / arr.length;
}

// getMaximum()
// Traverses the array to find the largest numeric value.
function getMaximum(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// getMinimum()
// Traverses the array to find the smallest numeric value.
function getMinimum(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// main()
// Manages logic, array population, validation, and layout rendering.
function main() {
    const count = readlineSync.questionInt("How many numbers? ");

    // Input Validation for positive N
    if (count <= 0) {
        console.log("Error: The number of elements must be a positive integer.");
        return;
    }

    const numbers = [];

    // Collect array data from user
    for (let i = 0; i < count; i++) {
        const num = readlineSync.questionInt(`Enter number ${i + 1}: `);
        numbers.push(num);
    }

    // Output statistical calculations
    console.log("\nResults:");
    console.log(`Sum:     ${getSum(numbers)}`);
    console.log(`Average: ${getAverage(numbers)}`);
    console.log(`Maximum: ${getMaximum(numbers)}`);
    console.log(`Minimum: ${getMinimum(numbers)}`);
}

main();
