import { Given, When, Then, And,Before } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './steps/loginPage'

/*Before(() => {
  cy.viewport(1920, 1080)
});*/

Given('I open login page', () => {
  // cy.visit('http://zero.webappsecurity.com/login.html')
  LoginPage.visic()
  cy.log(URL)
  //cy.wait(100000)
})

And('I fill username with of sendoso applicaton {string}',username=>{
     LoginPage.fillUsername(username)
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
Given(/^I open up the integration page$/, function () {
    LoginPage.visic()
});
Given(/^I enter the username in the username field on the login page$/, function () {
    LoginPage.enterUserName()
});

Given(/^I enter the password in the password field on the login page$/, function () {
    LoginPage.enterPassword()
});

Given(/^I click on the close popup of the application$/, function () {
    LoginPage.closePopup()

});