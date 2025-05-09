import { sum } from "./server";

//describe() - nome do grupo de testes - suite
describe("sum", () => {
  //test() - jest, nome e a função que será testada
  test("sum of 3 + 7 must be 10", () => {
    const result = sum(3, 7);

    //expect() - o que será testado, toBe - o que é esperado
    expect(result).toBe(10);
  });

  test("sum of 2 + 2 must be 4", () => {
    const result = sum(2, 2);

    //expect() - o que será testado, toBe - o que é esperado
    expect(result).toBe(4);
  });
});
