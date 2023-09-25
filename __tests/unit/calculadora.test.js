const calculadora = require("../../models/calculadora.js");

describe("Calculadora", () => {
  it("somar 2 + 2 deveria retornar 4", () => {
    const resultado = calculadora.somar(2, 2);
    expect(resultado).toBe(4);
  });
  it("subtrair 2 - 2 deveria retornar 0", () => {
    const resultado = calculadora.subtrair(2, 2);
    expect(resultado).toBe(0);
  });
  it("dividir 2 / 2 deveria retornar 1", () => {
    const resultado = calculadora.dividir(2, 2);
    expect(resultado).toBe(1);
  });
  it("Não é possivel dividir por zero", () => {
    const resultado = calculadora.dividir(2, 0);
    expect(resultado).toBe("Erro, não é possivel dividir por zero");
  });
});
