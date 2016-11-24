describe('Fazer Login no novoerp: ', function () {

   it('Realiza login', function () {
        var urlnovoerp = 'http://192.168.0.48/#/login';
        browser.get(urlnovoerp);
        element(by.model("login.email")).sendKeys('avanco@demonstracao.com.br');
        element(by.model("login.senha")).sendKeys('123456').click();
        $('button.entrar').click();
        browser.waitForAngular();
        expect(browser.getCurrentUrl()).toBe('http://192.168.0.48/#/app/painelvendas');
    
    });
      
 });

