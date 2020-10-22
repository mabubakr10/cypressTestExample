import { Given, When, Then, And,Before } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './steps/loginPage'

Before(() => {
  cy.viewport(2000, 3000)
});

Given('I open login page', () => {
  LoginPage.visic()

})

And('I fill password with of sendoso applicaton',()=>{
    LoginPage.fillPassword();
})

When('I click on submit login', () => {
  LoginPage.submit()

})

When('I add {int} and {int}',(a,b)=>{
      console.log(a);
      console.log(b)

});

When(/^I read the file with the "([^"]*)" and "([^"]*)"$/, (filepath,key)=> {
    let keyValues={};
     LoginPage.readFileJson(filepath,key)

});
Given(/^I close pop up button$/, function () {
    LoginPage.closePopUp();
});
Given( /^I close the popup of the advertise in our application$/, function () {
LoginPage.closePopupAdvertise();
} );
Given( /^I fill username with of sendoso applicaton$/, function () {
LoginPage.enterUserName();
} );