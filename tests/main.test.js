import { addition } from "..";

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
