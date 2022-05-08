import { correctSentence } from "./correctSentence.js";

export const welcomeUser = ({
  name = "John",
  surname = "Doe",
  age = 30,
  city = "Katowice",
} = {}) => {
  const validAnswer = `Witaj ${name} ${surname}! Czy dobrze pamiętam, że masz ${age} lat i mieszkasz w ${city}? Miło Cię znowu widzieć!`;
  return correctSentence(validAnswer);
};
