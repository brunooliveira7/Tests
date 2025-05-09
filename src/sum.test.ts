import { sum } from "./sum";

//describe() - nome do grupo de testes - suite
describe("sum", () => {
  let sumResult: number

  //beforeAll() - executa uma função antes de todos os testes
  beforeAll(() => {
    sumResult = 10;
    console.log("executado antes dos testes", sumResult);
  });

  //afterAll() - executa uma função depois de todos os testes
  afterAll(() => {
    sumResult = 0;
    console.log("executado depois dos testes", sumResult);
  });
  
  //test() nome e a função que será testada
  //it() = test()
  it("should do sum of 3 + 7 must be 10", () => {
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
