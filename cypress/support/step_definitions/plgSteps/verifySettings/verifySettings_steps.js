import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import sideBar from '../../steps/plg/sideBarPanel'
import settingsView from '../../steps/plg/userSettings/settingsPage'

Before(() => {
    cy.viewport(1920, 1080)
});

And('I click the User Settings option', () => {
    sideBar.viewUserSettings()
})

And ('I click the Notification tab', () => {
    settingsView.clickNotificationTab()
})

And ('I click the Send Summary Checkbox', () => {
    settingsView.clickSendSummaryCheckbox()
})

And ('I click save for Send Summary change', () => {
    settingsView.clickSaveSendSummaryCheckbox()
})

And ('I click OK to success message', () => {
    settingsView.clickOKSuccess()
})
