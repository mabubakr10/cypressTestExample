import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import plgStatic from '../../steps/plg/plgStaticPages.js'
import plgLink from '../../steps/plg/plgSignUp'

Before(() => {
    cy.viewport(1920, 1080)
});

Given('I am logged in as PLG user', () => {
    plgLink.closeSurvey()
    plgLink.verifyUserPlg()
})

And('I click on the Templates tab“', () => {
    plgStatic.clickTemplatesTab()
})

Then('I verify the user is shown a Templates static page', () => {
    plgStatic.verifyStaticTemplate()
})