# Take Home Assignment (JavaScript)

### Coding Assessment

### Requirements

Given an array of clicks, return the subset of clicks where:

1. For each IP within each one hour period, only the most expensive click is placed into the result set.
2. If more than one click from the same IP ties for the most expensive click in a one hour period, only place the earliest click into the result set.
3. If there are more than 10 clicks for an IP in the overall array of clicks, do not include any of those clicks in the result set.

The result set should be stored in an array of objects. Each object should represent a click. The expected result set should be a subset of the original array.

### Definitions

1. A click is the composite of an IP address, a timestamp, and a click amount.
2. Duplicate clicks are clicks that have the same IP address, regardless of timestamp or click amount.
3. Click periods are defined as the one hour spans that start at the top of the hour. So, in one day, there are 24 periods and they are broken down as follows (in HH:MM:SS format):

### Prerequisites

Ensure that NODE is installed on the device where this code is intended to run. Utilize npm in the shell/terminal to execute any necessary commands for running the code.

### List of Files Utilized

1. `index.js` - The primary file responsible for code execution & invoking necessary functions with actual JSON data.
2. `clicks.json` - For a given array of clicks, each click comprises an IP address, a timestamp, and a click amount
3. `dataSolution.js` - Main logic function that takes the clicks array as input & returns the resulting array.
4. `test.js` - Runs test cases.
5. `test_inputs.js` - Contains input and output data for the test file.
6. `resultset.json` - A json file with the result set produced by your solution.

## Installation Process

1. Clone this repository to your local machine.
2. Navigate to the repository folder in the terminal.
3. Install required packages using the command npm install.

## Running the code

A well written and performant solution, implemented in JavaScript Command to run the solution:

### npm run solution

A thorough suite of tests that will run when the Command to run the test cases:

### npm run test
