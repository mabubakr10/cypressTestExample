import { Given, When, Then, And,Before } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './steps/loginPage'

Before(() => {
  cy.viewport(1920, 1080)
});

Given('I open login page', () => {
  // cy.visit('http://zero.webappsecurity.com/login.html')
  LoginPage.visic()
  cy.log(URL)
  cy.wait(2000)
})

And('I fill username with of sendoso applicaton {string}',username=>{
     LoginPage.fillUsername(username)
    cy.wait(2000)
})

And('I fill password with of sendoso applicaton {string}',password=>{
    LoginPage.fillPassword(password)
    cy.wait(2000)
})

When('I click on submit login', () => {
  LoginPage.submit()
    cy.wait(2000)
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