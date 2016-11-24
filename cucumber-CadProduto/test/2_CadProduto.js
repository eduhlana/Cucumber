describe('Cadastro de Produto', function (){
    
    it('Acessa a pagina de Cadastro de produto', function () {

        $('button.md-icon-button')
        .click();
        browser.waitForAngular();

        $('md-icon.md-toggle-icon')
        .click();
        browser.waitForAngular();

        $('div.layout-align-start-center.layout-row.flex')
        .click();
    });

    it('Clicando no botão Adicionar' , function (){

         element(by.id('ad'))
        .click();
       
    });

    it('Inserindo a descrição do item' , function (){

         element(by.model('data.descricao'))
        .sendKeys('Produto Protractor');
    });

     it('Cadastrando Unidade de venda' , function (){
    
        element.all(by.id('unidadeVenda')).each(function (eachElement, index) {
            eachElement.click();                    
            browser.waitForAngular();        
            element( by.css('.md-select-menu-container.md-active md-option[value="UN"]')).click(); 
            browser.waitForAngular();              
      });
    });

     it('Cadastrando cst' , function (){
         
            element(by.name("cst"))
            .sendKeys("0 Tributada integralmente")
            .sendKeys(protractor.Key.ARROW_DOWN)
            .sendKeys(protractor.Key.ENTER);
            browser.waitForAngular();
       
    });
    
    it('Cadastrando alíquota', function () {
            browser.waitForAngular();
            
            element.all(by.id('aliquotaIcms')).each(function (eachElement, index) {
            eachElement.click();                    
            browser.waitForAngular();        
            element( by.css('.md-select-menu-container.md-active md-option[value="4"]')).click(); 
            browser.waitForAngular();              
      });
    });

    it('Escolhendo o  tipo do produto', function (){
            element.all(by.id('tipoItem')).each(function (eachElement, index) {
            eachElement.click();                    
            browser.waitForAngular();        
            element( by.css('.md-select-menu-container.md-active md-option[value="0"]')).click(); 
            browser.waitForAngular();              
      });
    });

    it('Escolhendo a origem do produto', function (){
            element.all(by.id('origem')).each(function (eachElement, index) {
            eachElement.click();                    
            browser.waitForAngular();        
            element( by.css('.md-select-menu-container.md-active md-option[value="0"]')).click();
            browser.waitForAngular();              
      });
      
    });

    // it('Cadastrando o ncm ',function (){
    //          element(by.id("ncm"))
    //         .sendKeys("3033300")
    //         .sendKeys(protractor.Key.ARROW_UP)
    //         .sendKeys(protractor.Key.ENTER);
    //         browser.waitForAngular();
         
    // });

    it('Escolhendo a classificação mercadológica', function() {
             $("#departamento input").sendKeys("Mercearia")
             .sendKeys(protractor.Key.ENTER)
            .sendKeys(protractor.Key.ARROW_DOWN)
            .sendKeys(protractor.Key.ENTER);
        browser.waitForAngular();
    });

    // it('Inserindo uma nova classificação mercadológica', function () {
    //      browser.waitForAngular();
    //     element(by.id("adicionar-departamento"))
    //         .sendKeys(protractor.Key.ENTER);
    //          browser.waitForAngular();
    //          browser.actions()
    //         .mouseUp()
    //         .sendKeys(protractor.Key.TAB)
    //         .sendKeys('ProtractorNOVO')
    //         .sendKeys(protractor.Key.TAB)
    //         .sendKeys(protractor.Key.TAB)
    //         .sendKeys(protractor.Key.ENTER)
    //         .perform();
    //          browser.waitForAngular();
    // });

     it('Inserindo Ficha financeira', function () {
        element(by.name("precoCusto")).sendKeys(1000);
        browser.waitForAngular();
        element(by.name("margemLucro")).sendKeys(700);
        browser.waitForAngular();
        element(by.name("precoFinal")).sendKeys(700);
        browser.waitForAngular();
        element(by.id("salvar")).click();
        browser.waitForAngular();

    });

    it('Validando se retornou para a tela de cadastro', function () {
        expect(browser.getCurrentUrl()).toBe('http://192.168.0.48/#/app/produto');
    });
});