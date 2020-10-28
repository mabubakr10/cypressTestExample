import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import plgStatic from '../../steps/plg/plgStaticPages.js'

Before(() => {
    cy.viewport(1920, 1080)
});

And('I click on the Teams tab', () => {
    plgStatic.clickTeamsTab()
})

Then('I verify the user is shown a Teams static page', () => {
    plgStatic.verifyStaticTeams()
})