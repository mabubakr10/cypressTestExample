import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import APIactions from './steps/APIactions'

Given(/^I generate auth0 token$/, function() {
    APIactions.getAuthAccessToken(Cypress.env('auth_username'), Cypress.env('auth_password'),
      Cypress.env('auth_redirect_uri'), Cypress.env('auth_client_id'),
      Cypress.env('auth_client_secret') , "core-qa");
});

Then(/^I hit the get all touches endpoint and verify its response$/, function () {
    APIactions.getTouches("core-qa");
});
Then(/^I send a touch and verify response$/, function () {
    APIactions.sendTouch("61383", "core-qa")
});