/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const cucumber = require('cypress-cucumber-preprocessor').default
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber())
}

// const webpackPreprocessor = require("@cypress/webpack-batteries-included-preprocessor");
// const { v4: uuid } = require("uuid");
// const filePreprocessor = webpackPreprocessor({ typescript: "typescript" });
// module.exports = on => {
//   const id = uuid();
//   on("file:preprocessor", file => {
//     file.outputPath = file.outputPath.replace(/^(.*\/)(.*?)(\..*)$/, `$1$2.${id}$3`);
//     return filePreprocessor(file);
//   });
// };

