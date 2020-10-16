import { Given } from 'cypress-cucumber-preprocessor/steps'
import APIactions from './steps/APIactions'

Given(/^I generate auth0 token$/, function() {
    // cy.login();

});
Given(/^I hit the get all touches endpoint$/, function() {
    APIactions.getTouches();

});