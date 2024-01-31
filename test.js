const test_data = require("./test_inputs.js");
const getData = require("./solution.js");
const assert = require("assert");

describe("While creating subset", function () {
  context("Lacks input arguments", function () {
    it("should return an error", function () {
      assert.throws(() => getData.clicksSubset(), "No Input!");
    });
  });
  context("Contains invalid input arguments", function () {
    it("should throw an error", function () {
      assert.throws(
        () => getData.clicksSubset({ abc: 9011 }),
        "Invalid Arguments"
      );
    });
  });
  context("with valid arguments", function () {
    it("should have equal array length", function () {
      assert.equal(
        test_data.output.length,
        getData.clicksSubset(test_data.input).length
      );
    });
  });
});
