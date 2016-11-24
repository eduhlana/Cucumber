describe('Cadastro de cliente',function () {
    it(' Acessa a pagina de Cadastro de Cliente', function (){
        $('button.md-icon-button').click();
        browser.waitForAngular();
        $('md-icon.md-toggle-icon').click()
        element(by.linkText('Clientes')).click();
        expect(browser.getCurrentUrl()).toBe('http://192.168.0.48/#/app/cliente'); 
    });
     it('Cadastrando Cliente Pessoa Física', function (){
        element(by.id("add")).click();
        browser.waitForAngular();
        var moment = require('moment');
        var data = moment(new Date(), 'YYYY-MM-DDTHH:mm:ss');
        var NASCIMENTO = data.format('DD/MM/YYYY');
        var email = 'protractor'+data+'@gmail.com';
        email = email.toString();
         element(by.model("data.cpfCnpj")).sendKeys('53561126375');
         browser.waitForAngular();
         element(by.model("data.nome "))
         .sendKeys("Client Protractor");
         browser.waitForAngular();
         $('input.md-datepicker-input').sendKeys(NASCIMENTO);
         browser.waitForAngular();
         element(by.model("data.identificadorSexo "))
          .sendKeys('Fem')
          .sendKeys(protractor.Key.ARROW_DOWN)
         .sendKeys(protractor.Key.ENTER);
          browser.waitForAngular();
          browser.waitForAngular();
          element(by.model("data.estadoCivil "))
          .sendKeys('S')
          .sendKeys(protractor.Key.ARROW_DOWN)
          .sendKeys(protractor.Key.ENTER);
           browser.waitForAngular();
          element(by.name("emailClienteFis")).sendKeys(email)
          .sendKeys(protractor.Key.ENTER);
          element(by.model("data.nomePai")).sendKeys("Pai do Protractor");
          browser.waitForAngular();
          element(by.model("data.nomeMae")).sendKeys("Mãe do Protractor");
          browser.waitForAngular();
          element(by.model("data.telefone")).sendKeys('3130251188');
          browser.waitForAngular();
          element(by.model("data.telefoneCelular")).sendKeys('31994963802');
          browser.waitForAngular();

    });
      it('Cadastrando o Endereço', function (){
         element(by.model("data.cep"))
          .sendKeys("30140000")
          .sendKeys(protractor.Key.ARROW_DOWN);
           browser.waitForAngular();
         element(by.model("data.tipoLogradouro")).sendKeys("AV");
           browser.waitForAngular();
         element(by.model("data.numeroEndereco")).sendKeys("131");
           browser.waitForAngular();
         element(by.model("data.pais "))
           .sendKeys('Brasil')
          .sendKeys(protractor.Key.ARROW_ENTER);

          browser.waitForAngular();
          element(by.model("data.uf "))
          .sendKeys('MG')
         .sendKeys(protractor.Key.ENTER);
          browser.waitForAngular();
         $('md-autocomplete#cidade')
          .sendKeys('Belo horizonte')
          .sendKeys(protractor.Key.ARROW_DOWN)
          .sendKeys(protractor.Key.ENTER);
          browser.waitForAngular();
       

    });
     it('Financeiro', function (){
        element(by.name("renda")).sendKeys('500');
        browser.waitForAngular();
        element(by.name("limite")).sendKeys('5000');
        browser.waitForAngular();
             
  });
    it('Contatos', function (){
         element(by.id('contatos')).click();
        // element(by.model("contato.nome")).sendKeys('Protractor');
        // browser.waitForAngular();
        // element(by.model("contato.cargo")).sendKeys('Analista Protractor');
        // browser.waitForAngular();
        //  element(by.model("contato.celular")).sendKeys('31994963999');
        // browser.waitForAngular();

             
  });
//     it('observação', function (){

//         // var EC = protractor.ExpectedConditions;
//         // var uploadLink = 
//          //element(by.id("salvar")).click();
//         // browser.wait(EC.elementToBeClickable(uploadLink), 10000).then(function(){
//          //uploadLink.click();
//   // });
// });
    
 });