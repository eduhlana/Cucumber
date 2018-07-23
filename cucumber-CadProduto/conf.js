var HierarchicalHTMLReporter = require('protractor-html-hierarchical-reporter');
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./test/1_login.js','./test/2_CadProduto.js',],
  resultJsonOutputFile:'result/result.json',
  cucumberOpts: {  
    require: '/*.js',  
    format: 'pretty',  
    format:'json: result/report.json'  },
    // params: {
    //     login :[
    //       {url : 'https:/ssss'},
    //       {user :'du@yahoo.com.br'},
    //       {password : '123456'},
    //     ]
    // },
 capabilities: {
    browserName: 'chrome',
    chromeOptions: {
        args: ['--user-data-dir=./cookie']
    }
 
//   browserName: 'phantomjs',
//   version: '',
//   platform: 'ANY'

},
onPrepare: function() {
      jasmine.getEnv().addReporter(
        new HierarchicalHTMLReporter({
          takeScreenshots: true,
          //takeScreenshotsOnlyOnFailures: true,
          savePath: 'result',
          filePrefix: 'resultado'
        })
      );
   }

};

