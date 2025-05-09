import  { sum } from "./server";

//test() - jest, nome e a função que será testada
test("sum of 3 + 7 must be 10", () => {
  const result = sum(3, 7);
  
  //expect() - o que será testado, toBe - o que é esperado
  expect(result).toBe(10);
});
