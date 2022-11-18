// bibliotecas
const { Builder, By } = require('selenium-webdriver')  //builder montador do wd
require('chromedriver')
const assert = require('assert')
//const { CANCELLED } = require('dns')

// suite de testes
describe('Comprar Passagem WD', () => {
    let driver  // objeto para ser o selenium

    // inicialização   
    beforeEach(async () => {   //ASYNC - velocidade máxima  / async function ()
        driver = await new Builder()
            .forBrowser('chrome')
            .build()
        driver.manage().setTimeouts({ implicit: 60000 })
        driver.manage().window().maximize()
    })

    // finalização
    afterEach(async () => {
        await driver.quit()

    })

    // teste
    it('Comprar Passagem SP - CA', async () => {
        await driver.get('https://www.blazedemo.com/')

        {
            const dropdown = await driver.findElement(By.name('fromPort'))                  //lista pai - origem
            await dropdown.findElement(By.xpath('//option[. = "São Paolo"]')).click()        //option[. ="São Paolo"]

        }

        {
            const dropdown = await driver.findElement(By.name('toPort'))                  //lista pai - origem
            await dropdown.findElement(By.xpath('//option[. = "Cairo"]')).click()
        }

        //últimos que incluí:

        await driver.findElement(By.css('input.btn.btn-primary')).click()

        // validar o titulo da guia e a frase de titulo da seleção dos vôos
        console.log("Get Title = " + await driver.getTitle()) //escreve no terminal o que está no getTitle
        assert(await driver.getTitle() == 'BlazeDemo - reserve')

        assert(await driver.findElement(By.xpath('//h3')).getText() == 'Flights from São Paolo to Cairo:')
    })
}) 