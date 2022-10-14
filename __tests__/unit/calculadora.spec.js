// Bibliotecas
// Apontamento para o arquivo que vou testar

const calculadora = require("../../src/calculadora");

//Funções de teste de unidade
test("Somar 5 + 7", function () {
    // 1 - Configura
    // 1.1 Dados de Entrada
    const num1 = 5;
    const num2 = 7;

    // 1.2 Resultado esperado
    resultadoEsperado = 12;

    // 1.3 configura a função que será somada
    // 2 - Executa
    // Criando um objeto para receber a função calculadora
    const somarDoisNumeros = calculadora.somarDoisNumeros;
    // Executando a função somar dois numeros e guardando resultado
    const resultadoAtual = somarDoisNumeros(num1, num2);


    // 3 - Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
})

test("Subtrair 15 - 7", () => {
    // 1 - Configura > Arrange
    // 1.1 Dados de Entrada
    const num1 = 15;
    const num2 = 7;

    // Saídas
    resultadoEsperado = 8;

    // 2 - Executa > Act
    const subtrairDoisNumeros = calculadora.subtrairDoisNumeros
    const resultadoAtual = subtrairDoisNumeros(num1, num2);

    // 3 - Valida > Assert
    expect(resultadoAtual).toBe(resultadoEsperado);

})

test("Multiplicar 3 * 7", () => {

    // 1 - Configura > Arrange
    // 1.1 Dados de Entrada
    const num1 = 3;
    const num2 = 7;
    const resultadoEsperado = 21;


    // 2 - Executa > Act
    const multiplicarDoisNumeros = calculadora.multiplicarDoisNumeros;
    const resultadoAtual = multiplicarDoisNumeros(num1, num2);

    // 3 - Valida > Assert
    expect(resultadoAtual).toBe(resultadoEsperado);
})


test("Dividir 27 / 9", () => {
    // 1 - Configura > Arrange
    // 1.1 Dados de Entrada
    const num1 = 27;
    const num2 = 9;
    const resultadoEsperado = 3;

    // 2 - Executa > Act
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    const resultadoAtual = dividirDoisNumeros(num1, num2);

    // 3 - Valida > Assert
    expect(resultadoAtual).toBe(resultadoEsperado);
})