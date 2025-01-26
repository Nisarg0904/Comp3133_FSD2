// test/calculator.js
import { expect } from "chai";
import * as calculator from "../app/calculator.js";

describe("Calculator Tests", () => {
  // Test cases for addition
  describe("Addition Tests", () => {
    it("add(5, 2) expected result 7 PASS", () => {
      const result = calculator.add(5, 2);
      expect(result).to.equal(7);
    });

    it("add(5, 2) expected result 8 FAIL", () => {
      const result = calculator.add(5, 2);
      expect(result).to.equal(8, "This test is expected to fail");
    });
  });

  // Test cases for subtraction
  describe("Subtraction Tests", () => {
    it("sub(5, 2) expected result 3 PASS", () => {
      const result = calculator.sub(5, 2);
      expect(result).to.equal(3);
    });

    it("sub(5, 2) expected result 5 FAIL", () => {
      const result = calculator.sub(5, 2);
      expect(result).to.equal(5, "This test is expected to fail");
    });
  });

  // Test cases for multiplication
  describe("Multiplication Tests", () => {
    it("mul(5, 2) expected result 10 PASS", () => {
      const result = calculator.mul(5, 2);
      expect(result).to.equal(10);
    });

    it("mul(5, 2) expected result 12 FAIL", () => {
      const result = calculator.mul(5, 2);
      expect(result).to.equal(12, "This test is expected to fail");
    });
  });

  // Test cases for division
  describe("Division Tests", () => {
    it("div(10, 2) expected result 5 PASS", () => {
      const result = calculator.div(10, 2);
      expect(result).to.equal(5);
    });

    it("div(10, 2) expected result 2 FAIL", () => {
      const result = calculator.div(10, 2);
      expect(result).to.equal(2, "This test is expected to fail");
    });
  });
});
