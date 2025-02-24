# Unhandled Exception in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions within HTTP servers.  The server starts successfully, but it crashes silently if an error occurs during request handling.  This example showcases the issue and provides a solution.

## Problem

The `bug.js` file contains a simple HTTP server that lacks proper error handling. If an error occurs while processing a request, the server will crash without providing any meaningful error messages in the console.  This makes debugging and identifying the root cause of the crash extremely difficult.

## Solution

The `bugSolution.js` file demonstrates how to properly handle exceptions using `try...catch` blocks. This ensures that even if an error occurs, the server remains operational and provides informative error messages, preventing unexpected crashes.

## How to Run

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to see the unhandled exception.
4. Run `node bugSolution.js` to see the handled exception.