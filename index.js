export const verifyPassword = (password) => {
  const specialCharsRegExp = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const numberRegExp = /[0-9]/;

  const capitallLetterRegExp = /[A-Z]/;

  if (password.length < 8) {
    return { code: 1, description: "Password is too short" };
  }

  if (!specialCharsRegExp.test(password)) {
    return {
      code: 2,
      description: "Password doesn't consist of at least one special character",
    };
  }

  if (!numberRegExp.test(password)) {
    return {
      code: 3,
      description: "Password doesn't consist of at least one number",
    };
  }

  if (!capitallLetterRegExp.test(password)) {
    return {
      code: 4,
      description: "Password doesn't consist of at least one capital letter",
    };
  }

  return { code: 0 };
};
