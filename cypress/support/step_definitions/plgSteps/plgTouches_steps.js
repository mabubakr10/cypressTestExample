import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import plgStatic from '../steps/plg/plgStaticPages'
import plgLink from '../steps/plg/plgSignUp'

Before(() => {
    cy.viewport(1920, 1080)
});

And('I click on the Touches tab', () => {
    plgStatic.clickTouchesTab()
})

Then('I verify the user is shown a Touches static page', () => {
    plgStatic.verifyStaticTouches()
})
