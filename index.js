export const addition = (a, b) => {
  if (typeof a === "undefined" || typeof b === "undefined") {
    return undefined;
  }

  if (typeof a !== "number" || typeof b !== "number") {
    return NaN;
  }

  return a + b;
};
