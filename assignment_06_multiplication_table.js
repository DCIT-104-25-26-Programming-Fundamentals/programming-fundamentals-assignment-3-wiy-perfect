// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Print the multiplication table for that number from 1 to 12.
//
// Expected output (if user enters 5):
//
//   Multiplication Table for 5:
//   5  x  1  =  5
//   5  x  2  =  10
//   5  x  3  =  15
//   ...
//   5  x  12 =  60
//
// -----------------------------------------------------------------------------
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
// - Ask the user to enter a number N.
// - Print the full multiplication table for every number from 1 to N.
// - Add a separator line (e.g. "---") between each table.
//
// Expected output (if user enters 3):
//
//   Multiplication Table for 1:
//   1  x  1  =  1
//   ...
//   1  x  12 =  12
//   ---------------------------
//   Multiplication Table for 2:
//   2  x  1  =  2
//   ...
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
// - Complete Part A before attempting Part B.

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// PART A: Print a single multiplication table for a number from 1 to 12
function printSingleTable(num) {
    if (num <= 0) {
        console.log("Error: Number must be a positive integer.");
        return;
    }

    console.log(`\nMultiplication Table for ${num}:`);
    for (let i = 1; i <= 12; i++) {
        // String padding keeps layout clean when numbers cross into double digits
        let multi = i.toString().padEnd(2);
        console.log(`${num}  x  ${multi} =  ${num * i}`);
    }
}

// PART B: Print all multiplication tables from 1 up to N
function printMultipleTables(maxNum) {
    if (maxNum <= 0) {
        console.log("Error: Number must be a positive integer.");
        return;
    }

    for (let currentNum = 1; currentNum <= maxNum; currentNum++) {
        printSingleTable(currentNum);
        
        // Add a clean dividing border between adjacent blocks (except after the last table)
        if (currentNum < maxNum) {
            console.log("---------------------------");
        }
    }
}

// main()
// Coordinates terminal input collection and error mitigation workflows.
function main() {
    console.log("=== MULTIPLICATION TABLE GENERATOR ===");

    // Execute Part A
    console.log("\n--- Part A: Single Table ---");
    const singleNum = readlineSync.questionInt("Enter a number: ");
    if (singleNum <= 0) {
        console.log("Error: Number must be a positive integer.");
        return; // Guard clause stops further program execution
    }
    printSingleTable(singleNum);

    // Execute Part B
    console.log("\n--- Part B: Tables from 1 to N ---");
    const limitNum = readlineSync.questionInt("Enter a number N: ");
    if (limitNum <= 0) {
        console.log("Error: Number must be a positive integer.");
        return; // Guard clause stops further program execution
    }
    printMultipleTables(limitNum);
}


main();

