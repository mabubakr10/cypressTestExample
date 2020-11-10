import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import plgLink from '../steps/plg/plgSignUp'

Before(() => {
    cy.viewport(1920, 1080)
});

Given('I login with the new PLG user“', () => {
    plgLink.logInPlg()
})

And('I fill the onboarding form', () => {
    plgLink.onboardingForm()
})

And('I add Credit Card Details', () => {
    plgLink.addCC()
})

Then('I verify PLG user is redirected to core dashboard', () => {
    cy.url().should('include', 'core-qa.sendoso.com/send')
})
