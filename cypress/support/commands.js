// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-wait-until';
Cypress.Commands.add('readJSonData', (fileName,key) => {
  cy.readFile("cypress/fixtures/profiles.json").then(jsonObj => {
    this.data = jsonObj[key]
  });

  Cypress.Commands.add('switchToIframe', (iframe) => {
    return cy
        .get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
  });

Cypress.Commands.add('getText', { prevSubject: 'element' }, ($element) => {
  cy.wrap($element).scrollIntoView();
  return cy.wrap($element).invoke('text');
});

Cypress.Commands.add('getText', { prevSubject: 'element' }, ($element) => {
  cy.wrap($element).scrollIntoView();
  return cy.wrap($element).invoke('text');
})
})
