import { Given } from 'cypress-cucumber-preprocessor/steps'
import APIactions from './steps/APIactions'

Given(/^I generate auth0 token$/, function() {
    APIactions.getAuthAccessToken(Cypress.env('auth_username'), Cypress.env('auth_password'),
      Cypress.env('auth_redirect_uri'), Cypress.env('auth_client_id'),
      Cypress.env('auth_client_secret') , "core-qa");
});

Given(/^I hit the get all touches endpoint$/, function() {
    APIactions.getTouches("core-qa");

});