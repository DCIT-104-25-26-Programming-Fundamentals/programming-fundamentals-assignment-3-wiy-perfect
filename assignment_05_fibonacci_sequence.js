// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync')

// PART A: Generate and print the first N terms
function printFibonacciTerms(n) {
    if (n <= 0) {
        console.log("Error: Number of terms must be a positive integer.");
        return;
    }

    let sequence = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        sequence.push(a);
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    console.log(`Fibonacci sequence: ${sequence.join(' ')}`);
}

// PART B: Check if a given number belongs to the Fibonacci sequence
function isFibonacciNumber(target) {
    if (target < 0) {
        return false;
    }

    let a = 0;
    let b = 1;

    // Generate terms dynamically until we hit or pass the target value
    while (a < target) {
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    // If 'a' matches target, it's a valid Fibonacci number
    return a === target;
}

// Manages the user input interface and routes execution flows.
function main() {
    console.log("=== FIBONACCI SEQUENCE GENERATOR ===");

    // Execute Part A
    console.log("\n--- Part A: Print First N Terms ---");
    const terms = readlineSync.questionInt("How many terms? ");
    printFibonacciTerms(terms);

    // Execute Part B
    console.log("\n--- Part B: Sequence Membership Test ---");
    const numToCheck = readlineSync.questionInt("Enter a number to check: ");
    
    if (isFibonacciNumber(numToCheck)) {
        console.log(`${numToCheck} is a Fibonacci number.`);
    } else {
        console.log(`${numToCheck} is NOT a Fibonacci number.`);
    }
}


main();
