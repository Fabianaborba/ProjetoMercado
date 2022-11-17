//Bibliotecas
// Configura
const supertest = require("supertest");  // Framework de teste de API
const assert = require("chai").assert;   // Função de assertiva do resultado

//constantes, varáveis e objetos
const baseUrl = "https://petstore.swagger.io/v2";  // url base da API

describe("PetStore Swagger - User", () => {
    const request = supertest(baseUrl);

    it("Get User Login", () => {
        //configura
        username = "xyzcompany";
        password = "123456"

        //executa
        return request
            .get("/user/login?username=" + username + "&password=" + password)
            .then((response) => {
                assert.equal(response.statusCode, 200);
                assert.equal(response.body.code, 200);
                assert.equal(response.body.type, "unknown");
                mensagem = response.body.message;
                frase = mensagem.substring(0, mensagem.indexOf(":") + 1)
                console.log("A frase eh " + frase);
                assert.equal(frase, "logged in user session:");
                token = mensagem.substring(mensagem.indexOf(":") + 1)
                console.log("O token eh " + token);

            }); //fim do then

    });

});