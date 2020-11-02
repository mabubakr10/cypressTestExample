import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './steps/loginPage'

Before(() => {
  cy.viewport(2000, 3000)
});

Given('I open login page', () => {
  LoginPage.visic()
})

And('I fill password with of sendoso applicaton', () => {
  LoginPage.fillPassword();
})

When('I click on submit login', () => {
  LoginPage.submit()
})

When('I add {int} and {int}', (a, b) => {
  console.log(a);
  console.log(b)
});

When(/^I read the file with the "([^"]*)" and "([^"]*)"$/, (fileName, key) => {
  let keyValues = {};
  LoginPage.readFileJson(fileName, key)
});

Given(/^I close pop up button$/, function () {
  LoginPage.closePopUp();
});

Given(/^I close the popup of the advertise in our application$/, function () {
  LoginPage.closePopupAdvertise();
});

Given(/^I fill username with of sendoso applicaton$/, function () {
  LoginPage.enterUserName();
});

Given(/^I enter the username in the username field on the login page$/, function () {
  LoginPage.enterUserName()
});

Given(/^I enter the password in the password field on the login page$/, function () {
  LoginPage.enterPassword()
})