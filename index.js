export const welcomeUser = ({
  name = "John",
  surname = "Doe",
  age = 30,
  city = "Katowice",
} = {}) => {
  const validAnswer = `Witaj ${name} ${surname}! Czy dobrze pamiętam, że masz ${age} lat i mieszkasz w ${city}? Miło Cię znowu widzieć!`;
  return validAnswer;
};

console.log(
  welcomeUser({ name: "John", surname: "Doe", city: "Katowice", age: 30 })
);
