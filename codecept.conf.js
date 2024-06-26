const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true,
      waitForNavigation: 'networkidle',
      wiatForTimeout: 10000
    },
    REST: {
      endpoint: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/',
      prettyPrintJson: true,
      defaultHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    },
    JSONResponse: {},
  },

 

  include: {
    I: './steps_file.js',

    basePage: "./pages/base.js",

    productPage: "./pages/product.js",
  },
  "mocha": {
    "reporterOptions": {
        "reportDir": "output"
    }
  },
  name: 'codecept'
}