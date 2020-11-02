import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import APIactions from './steps/APIactions'

Given(/^I generate auth0 token$/, function() {
    APIactions.getAuthAccessToken(Cypress.env('auth_username'), Cypress.env('auth_password'),
      Cypress.env('auth_redirect_uri'), Cypress.env('auth_client_id'),
      Cypress.env('auth_client_secret') , Cypress.env('instance'));
});

Then(/^I hit the get all touches endpoint and verify its response$/, function () {
    APIactions.getTouches(Cypress.env('instance'));
});

Then('I send a touch {string} and verify response',  (touch_id) => {
    APIactions.sendTouch(touch_id, Cypress.env('instance'))
});

Then('I send a physical touch {string} and verify response', (touch_id) => {
    APIactions.sendPhysicalGift(touch_id, Cypress.env('instance'));
});