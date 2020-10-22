import { Given, When, Then, And,Before } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './steps/loginPage'

Before(() => {
  cy.viewport(2000, 3000)
});

Given('I open login page', () => {
  LoginPage.visic()
  //   LoginPage.switchToFrameFun();

})

And('I fill username with of sendoso applicaton {string}',username=>{
     LoginPage.fillUsername(username)
})

And('I fill password with of sendoso applicaton {string}',password=>{
    LoginPage.fillPassword(password)
})

When('I click on submit login', () => {
  LoginPage.submit()

})

When('I add {int} and {int}',(a,b)=>{
      console.log(a);
      console.log(b)

});

Then('I read the file',()=>{

  /*  cy.fixture('profile').as('prf')
    cy.log("testing")
    cy.get("@prf").then((prf)=>{
        cy.log(prf.phoneNumber.type)
    })*/
});
When(/^I read the file with the "([^"]*)" and "([^"]*)"$/, (fileName,key)=> {
    let keyValues={};
    //keyValues=LoginPage.readFileJson(fileName, key)
     LoginPage.readFileJson(fileName,key)

});
Given(/^I close pop up button$/, function () {
    LoginPage.closePopUp();
});