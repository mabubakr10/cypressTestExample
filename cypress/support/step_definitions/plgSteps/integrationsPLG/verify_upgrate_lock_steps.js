import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import integrationPLG from '../../steps/plg/integrationPage/integrationUpgrade'
import sideBar from '../../steps/plg/sideBarPanel'

Before(() => {
    cy.viewport(1920, 1080)
});

And('I click on the integrations option', () => {
    sideBar.viewIntegrations()
})

Then('I verify the upgrade sign is present on all locked integrations', () => {
    integrationPLG.verifyUpgrade()
})
