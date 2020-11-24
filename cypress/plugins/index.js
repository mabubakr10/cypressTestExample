/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
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
//const mysql = require('mysql')

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('task', {
    // Usage: cy.task('queryDb', query)
    queryDb: query => {
      return queryTestDb(query, config)
    },
  })
}

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  allureWriter(on, config);
  return config;
}

// function queryTestDb(query, config) {
//   // creates a new mysql connection using credentials from cypress.json env's
//   const connection = mysql.createConnection(config.env.db)
//   // start connection to db
//   connection.connect()
//   // exec query + disconnect to db as a Promise
//   return new Promise((resolve, reject) => {
//     connection.query(query, (error, results) => {
//       if (error) reject(error)
//       else {
//         connection.end()
//         // console.log(results)
//         return resolve(results)
//       }
//     })
//   })
// }
