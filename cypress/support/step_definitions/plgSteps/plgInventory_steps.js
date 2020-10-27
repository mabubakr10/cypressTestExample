import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import plgStatic from '../steps/plg/plgStaticPages'

Before(() => {
    cy.viewport(1920, 1080)
});

And('I click on the Inventory tab', () => {
    plgStatic.clickInventoryTab()
})

Then('I verify the user is shown a Inventory static page', () => {
    plgStatic.verifyStaticInventory()
})