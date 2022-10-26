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
        const jsonFile = require("../../vendors/json/pet1.json");
        // Realizar a requisição a receber a resposta
        return request       // Chamada apra a requisição
            .post("/pet")    // endpoint / função para incluir o animal
            .send(jsonFile)  // Envia os dados do animal no corpo da requisição
            // Valida
            .then((response) => {                                // pra todo request, há um response
                assert.equal(response.statusCode, 200);         // Validando status code > se requisição foi recebida e processada
                assert.equal(response.body.id, petId);       // Se é ID esperado do animal
                assert.equal(response.body.name, "ScoobyDoo");  // Se é o nome esperado
                assert.equal(response.body.status, "available");   // Se está com status esperado
            });
    });
});