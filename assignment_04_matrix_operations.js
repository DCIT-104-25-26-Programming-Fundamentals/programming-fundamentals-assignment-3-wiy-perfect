// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function readMatrix(rows, cols, label = "Matrix") {
    console.log(`\nEnter values for ${label} (${rows}x${cols}):`);
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let input = readlineSync.question(`Enter row ${i + 1}: `);
        let parsedRow = input.trim().split(/\s+/).map(Number);
        
        // Basic fallback validation if user misses elements
        while (parsedRow.length !== cols || parsedRow.some(isNaN)) {
            console.log(`Error: Please enter exactly ${cols} numbers separated by spaces.`);
            input = readlineSync.question(`Enter row ${i + 1}: `);
            parsedRow = input.trim().split(/\s+/).map(Number);
        }
        matrix.push(parsedRow);
    }
    return matrix;
}

// Helper: Display matrices dynamically in a padded, clean grid layout
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let rowStr = "";
        for (let j = 0; j < matrix[i].length; j++) {
            // Pads spaces to keep columns neatly aligned
            rowStr += matrix[i][j].toString().padEnd(6);
        }
        console.log(rowStr);
    }
}

// =============================================================================
// PART A: TRANSPOSE A MATRIX
// =============================================================================
function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let result = [];

    for (let j = 0; j < cols; j++) {
        let newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

// =============================================================================
// PART B: ADD TWO MATRICES
// =============================================================================
function addMatrices(matrixA, matrixB) {
    let rows = matrixA.length;
    let cols = matrixA[0].length;
    let result = [];

    for (let i = 0; i < rows; i++) {
        let newRow = [];
        for (let j = 0; j < cols; j++) {
            newRow.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

// =============================================================================
// PART C: MULTIPLY TWO MATRICES
// =============================================================================
function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let colsB = matrixB[0].length;
    let result = [];

    for (let i = 0; i < rowsA; i++) {
        let newRow = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            newRow.push(sum);
        }
        result.push(newRow);
    }
    return result;
}

// =============================================================================
// MAIN EXECUTION FLOW
// =============================================================================
function main() {
    console.log("=== MATRIX OPERATIONS CALCULATOR ===");

    // --- EXECUTE PART A ---
    console.log("\n--- Part A: Transpose a Matrix ---");
    let rA = readlineSync.questionInt("Enter number of rows (M): ");
    let cA = readlineSync.questionInt("Enter number of columns (N): ");
    if (rA <= 0 || cA <= 0) {
        console.log("Error: Dimensions must be positive.");
        return;
    }
    let matA = readMatrix(rA, cA, "Original Matrix");
    console.log("\nOriginal Matrix:");
    printMatrix(matA);
    
    let transposed = transposeMatrix(matA);
    console.log("\nTransposed Matrix:");
    printMatrix(transposed);

    // --- EXECUTE PART B ---
    console.log("\n--- Part B: Add Two Matrices ---");
    console.log(`Using matching ${rA}x${cA} layout dimensions:`);
    let matB1 = readMatrix(rA, cA, "Matrix 1");
    let matB2 = readMatrix(rA, cA, "Matrix 2");
    
    let added = addMatrices(matB1, matB2);
    console.log("\nResult of Matrix Addition:");
    printMatrix(added);

    // --- EXECUTE PART C ---
    console.log("\n--- Part C: Multiply Two Matrices ---");
    console.log(`Matrix A will be your original ${rA}x${cA} matrix.`);
    let cB = readlineSync.questionInt(`Enter columns for Matrix B (Rows fixed at ${cA} to match): `);
    if (cB <= 0) {
        console.log("Error: Dimensions must be positive.");
        return;
    }
    let matC_B = readMatrix(cA, cB, "Matrix B");

    let multiplied = multiplyMatrices(matA, matC_B);
    console.log("\nResult of Matrix Multiplication (A x B):");
    printMatrix(multiplied);
}


main();
