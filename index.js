const fs = require("fs");
var getData = require("./solution.js");

let rawdata;
let clicks;
let result;

// Save the final computed result into a new file
const saveFile = (result) => {
  let jsonData = JSON.stringify(result);
  fs.writeFile("result-set.json", jsonData, (error) => {
    if (error) {
      console.log("ERROR :", error);
    } else {
      console.log("JSON file is successfully saved.");
    }
  });
};

const readclicks = () => {
  try {
    rawdata = fs.readFileSync("./clicks.json");
    clicks = JSON.parse(rawdata);
    result = getData.clicksSubset(clicks);
    if (result) {
      saveFile(result);
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

readclicks();
