import { addition, subtraction, multiplication, dividing } from "..";

describe("Sprawdzanie działania dodawnia", () => {
  test("2 + 3 jest równe 5", () => {
    expect(addition(2, 3)).toBe(5);
  });
  test("2 + -3 jest równe -1", () => {
    expect(addition(2, -3)).toBe(-1);
  });

  test('2 + "3" jest równe NaN', () => {
    expect(addition(2, "3")).toBe(NaN);
  });

  test("2 + undefined jest równe undefined", () => {
    expect(addition(2, undefined)).toBe(undefined);
  });
});

describe("Sprawdzanie działania odejmowania", () => {
  test("8 - 5 jest równe 3", () => {
    expect(subtraction(8, 5)).toBe(3);
  });
  test("-5 - -3 jest równe -2", () => {
    expect(subtraction(-5, -3)).toBe(-2);
  });
  test("-12 - '3' jesr równe NaN", () => {
    expect(subtraction(-12, "3")).toBe(NaN);
  });
  test("31 + undefined jest równe undefined", () => {
    expect(subtraction(31, undefined)).toBe(undefined);
  });
});

describe("Sprawdzanie działania mnożenia", () => {
  test("4 x 3 jest równe 12", () => {
    expect(multiplication(4, 3)).toBe(12);
  });
  test("121 x 0 jest równe 0", () => {
    expect(multiplication(121, 0)).toBe(0);
  });
  test("'3' x 44 jest równe Nan", () => {
    expect(multiplication("3", 44)).toBe(NaN);
  });
  test("Undefined x -3 jest równe Undefined", () => {
    expect(multiplication(undefined, -3)).toBe(undefined);
  });
});

describe("Sprawdzanie działania dzielenia", () => {
  test("160 / 40 jest równe 4", () => {
    expect(dividing(160, 40)).toBe(4);
  });
  test("30 / 20 jest równe 1.5", () => {
    expect(dividing(30, 20)).toBe(1.5);
  });
  test("Undefined / 11 jest równe Undefined", () => {
    expect(dividing(undefined, 11)).toBe(undefined);
  });
  test("182 / '13' jest równe NaN", () => {
    expect(dividing(182, "13")).toBe(NaN);
  });
});
