// Importação  / Referência a Bibliotecas

// Classe > grupo de funções > instância: substantivos e adjetivos (opcional)

//Funções ou Métodos (método nao da return)

// var: variavel
//let: variavel aperfeiçoada
//const: constante

//Notações: camelCase (js) ou snake_case (python)

//5 +  7

let somarDoisNumeros = function somarDoisNumeros(num1, num2) {
    // 5    +   7
    const resultado = num1 + num2;
    return resultado;
}

let subtrairDoisNumeros = function subtrairDoisNumeros(num1, num2) {
    const resultado = num1 - num2;
    return resultado;
}

const multiplicarDoisNumeros = (num1, num2) => {
    return num1 * num2;
}

const dividirDoisNumeros = (num1, num2) => num1 / num2;

module.exports = {
    somarDoisNumeros,
    subtrairDoisNumeros,
    multiplicarDoisNumeros,
    dividirDoisNumeros
};
