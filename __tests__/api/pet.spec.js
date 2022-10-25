//Bibliotecas
// Configura
const supertest = require("supertest");  // Framework de teste de API
const assert = require("chai").assert;   // Função de assertiva do resultado

// constantes, variáveis e objetivos
const baseUrl = "https://petstore.swagger.io/v2";  // url base da API
const petId = 6704271;                              // código do animal

// Descrição = conjunto de testes ~ Classe
describe("PetStore Swagger - Pet", () => {
    const request = supertest(baseUrl);

    // Post - teste de incluir um animal
    it("Post Pet", () => {
        // Configura
        
    });
});