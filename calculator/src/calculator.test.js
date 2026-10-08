import { describe, test, expect } from "vitest";
import {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
  validateInputs,
} from "./calculator.js";

describe("addNumbers", () => {
  test("adds two numbers", () => {
    expect(addNumbers(2, 3)).toBe(5);
  });

  test("adds zero", () => {
    expect(addNumbers(0, 5)).toBe(5);
  });
});

describe("subtractNumbers", () => {
  test("subtracts the second number from the first", () => {
    expect(subtractNumbers(5, 3)).toBe(2);
  });

  test("subtracts a larger second number from the first", () => {
    expect(subtractNumbers(3, 5)).toBe(-2);
  });

  test("subtracts zero", () => {
    expect(subtractNumbers(5, 0)).toBe(5);
  });
});

describe("multiplyNumbers", () => {
  test("multiplies two numbers", () => {
    expect(multiplyNumbers(2, 3)).toBe(6);
  });

  test("multiplies by zero", () => {
    expect(multiplyNumbers(5, 0)).toBe(0);
  });
});

describe("divideNumbers", () => {
  test("divides the first number by the second number", () => {
    expect(divideNumbers(6, 3)).toBe(2);
  });
});

describe("validateInputs", () => {
  test("rejects an empty first number", () => {
    expect(validateInputs("", "3", "add")).toBe(
      "Please enter a valid number in both fields.",
    );
  });

  test("rejects an empty second number", () => {
    expect(validateInputs("2", "", "add")).toBe(
      "Please enter a valid number in both fields.",
    );
  });

  test("rejects non-numeric input", () => {
    expect(validateInputs("abc", "3", "add")).toBe(
      "Please enter a valid number in both fields.",
    );
  });

  test("accepts valid numeric input", () => {
    expect(validateInputs("2", "3", "add")).toBeNull();
  });

  test("rejects division by zero with an error message", () => {
    expect(validateInputs("6", "0", "divide")).toBe(
      "Cannot divide by zero.",
    );
  });
});
