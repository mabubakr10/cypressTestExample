import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import plgStatic from '../../steps/plg/plgStaticPages.js'

Before(() => {
    cy.viewport(1920, 1080)
});

Then('I verify the user is shown an Unlock bulk sending static page', () => {
    plgStatic.verifyUploadCsv()
})
