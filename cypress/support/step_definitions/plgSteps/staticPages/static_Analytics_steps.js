import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import plgStatic from '../../steps/plg/plgStaticPages.js'

Before(() => {
    cy.viewport(1920, 1080)
});

And('I click on the Analytics tab', () => {
    plgStatic.clickAnalyticsTab()
})

Then('I verify the user is shown a Analytics static page', () => {
    plgStatic.verifyStaticAnalytics()
})