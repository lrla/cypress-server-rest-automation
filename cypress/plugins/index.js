/* eslint-disable no-undef */
/**
 * This file contains all the routes necessary to run cypress dashboard
 * Plugins enable you to tap into, modify, or extend the internal behavior of Cypress. 
 * All of your test code, your application, and Cypress commands are executed in the browser. 
 * But Cypress is also a Node process that plugins can use.
 * With plugins, you can programmatically alter the resolved configuration and environment variables 
 * that come from your configuration file (cypress.json by default), cypress.env.json, the command line, 
 * or system environment variables.
*/

// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line no-undef
// eslint-disable-next-line @typescript-eslint/no-var-requires
const wp = require('@cypress/webpack-preprocessor');
// eslint-disable-next-line no-undef

// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpackPreprocessor = require('@cypress/webpack-preprocessor')

module.exports = (on) => {
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('../../webpack.config'),
    watchOptions: {},
  }

  on('file:preprocessor', webpackPreprocessor(options))
};

// cypress/plugins/index.js
module.exports = (on, config) => {
  // optional: register cypress-grep plugin code
  // https://github.com/cypress-io/cypress-grep
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('cypress-grep/src/plugin')(config)
  // make sure to return the config object
  // as it might have been modified by the plugin
  return config
}