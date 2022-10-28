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
        // pontar para o arquivo json pet1
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

    // Consulta o animal pelo seu pet ID
    it("Get Pet", () => {
        return request                     //Chamada para a requisição
            .get("/pet/" + petId)          //Consultar o anima pelo ID
            .then((response) => {
                assert.equal(response.statusCode, 200);                // Tratar a resposta / retorno
                assert.equal(response.body.petId);
                assert.equal(response.body.name, "ScoobyDoo");
                assert.equal(response.body.status, "available");

            });
    });

    //Alterar dados do animal
    it("Put Pet", () => {
        // pontar para o arquivo json pet2
        const jsonFile = require("../../vendors/json/pet2.json");

        return request                     // Realizar a requisição
            .put("/pet")                 // Alteração do animal - aponta para o endpoint
            .send(jsonFile)              // json com a alteração
            .then((response) => {       // Receber e validar a resposta
                assert.equal(response.statusCode, 200);
                assert.equal(response.body.id, petId);
                assert.equal(response.body.name, "ScoobyDoo");
                assert.equal(response.body.tags[1].id, 4);
                assert.equal(response.body.tags[1].name, "castrated");
                assert.equal(response.body.status, "solded");
            });
    });

    it("Delete Pet", () => {
        return request
            .delete("/pet/" + petId)
            .then((response) => {
                assert.equal(response.statusCode, 200)
            });
    });
});

// [] colchetes = lista de coisas
// {} abre e fecha código
// () parenteses envia e recebe dados