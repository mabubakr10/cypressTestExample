import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../steps/loginPage'
import plgLink from '../steps/plg/plgSignUp'

Before(() => {
    cy.viewport(1000, 660)
});

Given('I open up the core page', () => {
    cy.viewport(1000, 660)
    LoginPage.visic()
})

And('I click on the Generate Self-Serve SignUp Link', () => {
    plgLink.clickGenerateLink()
})

And('I click on the Create Self-Serve SignUp button', () => {
    plgLink.clickGenerateButton()
})

And('I enter the email id in the email field on the Generate Self-Serve SignUp page {string}', email => {
    plgLink.addPlgEmail(email)
})

And('I click on the Create button', () => {
    plgLink.createLinkButton()
})

And('I click on OK to close the pop up', () => {
    plgLink.closePopUp()
})

And('I copy and redirect to the Sign Up token', () => {
    plgLink.getLinkPlg()
})

Then('I complete the sign up form', () => {
    plgLink.completeSignUpForm()
})
