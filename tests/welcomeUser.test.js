import { welcomeUser } from "../welcomeUser";
import { userCorrect, userPartiallyInvalid } from "../mocked/user";

describe("Sprawdzanie poprawności powitań", () => {
  test("Po podaniu wszystkich poprawnych danych, zwroci powitanie w poprawnym formacie", () => {
    const validAnswer = `Witaj Jakub Molicki! Czy dobrze pamiętam, że masz 31 lat i mieszkasz w Biała Podlaska? Miło Cię znowu widzieć!`;
    expect(welcomeUser(userCorrect)).toBe(validAnswer);
  });

  test("Kiedy nie zostaną podane zadne informacje, zwroci powitanie z domyslnymi danymi", () => {
    const validAnswer = `Witaj John Doe! Czy dobrze pamiętam, że masz 30 lat i mieszkasz w Katowice? Miło Cię znowu widzieć!`;
    expect(welcomeUser()).toBe(validAnswer);
  });

  test("Kiedy zostanie podana czesc wlasciwosci, zwroci powitanie z czesciowo domyslnymi danymi", () => {
    const validAnswer = `Witaj John Molicki! Czy dobrze pamiętam, że masz 30 lat i mieszkasz w Biała Podlaska? Miło Cię znowu widzieć!`;
    expect(welcomeUser(userPartiallyInvalid)).toBe(validAnswer);
  });
});
