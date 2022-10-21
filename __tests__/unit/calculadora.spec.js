// Bibliotecas
// Apontamento para o arquivo que vou testar

const calculadora = require("../../src/calculadora");

//Apontamento para o arquivo de massa de teste
const arquivoJs = require("../../vendors/CSV/massaDivisao");

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

//HP ALM Data Driven Test
let massaDivisao = [        // Matriz, Array, Lista de valores
    [10, 5, 2],             // Tupla > sequência ordenada de n elementos
    [15, 3, 5],
    [8, 4, 2],
    [7, 0, Infinity]

]


test.each(massaDivisao)("Dividir %f / %f", (num1, num2, resultadoEsperado) => {
    //Configura
    //Dados de entrada e resultado esperado são providos pela lista massaDivisao
    //const num1 = 50;
    // const num2 = 5;
    //const resultadoEsperado = 10;

    // 2 - Executa > Act
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    const resultadoAtual = dividirDoisNumeros(num1, num2);

    // 3 - Valida > Assert
    expect(resultadoAtual).toBe(resultadoEsperado);
})

//Copia da divisao simples
test.each(arquivoJs.array.map(elemento => [
    elemento.num1,
    elemento.num2,
    elemento.resultadoEsperado
]))

    ("DDT: Dividir 27 / 9", (num1, num2, resultadoEsperado) => {
        // 1 - Configura > Arrange
        // 1.1 Dados de Entrada


        // 2 - Executa > Act
        const dividirDoisNumeros = calculadora.dividirDoisNumeros;
        const resultadoAtual = dividirDoisNumeros(num1, num2);

        // 3 - Valida > Assert
        expect(resultadoAtual).toBe(resultadoEsperado);

    })



