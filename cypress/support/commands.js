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

})

Cypress.Commands.add('login', (overrides = {}) => {
  Cypress.log({
    name: 'loginViaAuth0',
  });

  const options = {
    method: 'POST',
    url: Cypress.env('auth_url'),
    body: {
      response_type: "code",
      scope: 'openid profile email',
      client_id: Cypress.env('auth_client_id'),
      client_secret: Cypress.env('auth_client_secret'),
      username: Cypress.env('auth_username'),
      password: Cypress.env('auth_password'),
    },
  };
  cy.request(options).then((response) => {
    const { access_token, expires_in, id_token } = response;
    expect(response.status).to.eq(200)
    expect(response).to.have.property('headers')
    expect(response).to.have.property('duration')

  })


});

