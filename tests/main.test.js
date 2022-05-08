import { verifyPassword } from "../index.js";

describe("Veryfing if provided password is correct", () => {
  test("Too short password 'pass' returns code: 1 and description", () => {
    expect(verifyPassword("pass")).toEqual({
      code: 1,
      description: "Password is too short",
    });
  });

  test("Password withot at least one special character returns code: 2 and description", () => {
    expect(verifyPassword("password")).toEqual({
      code: 2,
      description: "Password doesn't consist of at least one special character",
    });
  });

  test("Password without at least one number returns code: 3 and description", () => {
    expect(verifyPassword("!password")).toEqual({
      code: 3,
      description: "Password doesn't consist of at least one number",
    });
  });

  test("Password without at least one capital letter returns code: 4 and description", () => {
    expect(verifyPassword("!password1")).toEqual({
      code: 4,
      description: "Password doesn't consist of at least one capital letter",
    });
  });

  test("Correct password returns code 0 and no description", () => {
    expect(verifyPassword("!Password1")).toEqual({ code: 0 });
  });
});
