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

And ('I click the unsubscribe from all checkbox under Email section', () => {
    settingsView.clickUnsubscribeAllEmail()
})

And ('I click save for Email settings', () => {
    settingsView.clickSaveEmailButton()
})

And ('I verify email checkboxes are all unmarked', () => {
    settingsView.verifyEmailUnmarkedCheckboxes()
})

And ('I click the weekly reports checkbox via email', () => {
    settingsView.checkWeeklyReportEmail()
})

And ('I click the Alerts when received checkbox via email', () => {
    settingsView.checkReceivedTouchEmail()
})

And ('I click the Unused eGift Alerts checkbox via email', () => {
    settingsView.checkUnusedTouchEmail()
})

And ('I click Alerts when shipped checkbox via email', () => {
    settingsView.checkShippedTouchEmail()
})

Then ('I verify Email checkboxes are all marked', () => {
    settingsView.verifyEmailMarkedCheckboxes()
})

And ('I click the unsubscribe from all checkbox under SMS section', () => {
    settingsView.clickUnsubscribeAllSMS()
})

And ('I click save for SMS settings', () => {
    settingsView.clickSaveSmsButton()
})

And ('I verify SMS checkboxes are all unmarked', () => {
    settingsView.verifySmsUnmarkedCheckboxes()
})

And ('I click the weekly reports checkbox via SMS', () => {
    settingsView.checkWeeklyReportSMS()
})

And ('I click the Alerts when received checkbox via SMS', () => {
    settingsView.checkReceivedTouchSMS()
})

And ('I click the Unused eGift Alerts checkbox via SMS', () => {
    settingsView.checkUnusedTouchSMS()
})

And ('I click Alerts when shipped checkbox via SMS', () => {
    settingsView.checkShippedTouchSMS()
})


Then ('I verify SMS checkboxes are all marked', () => {
    settingsView.verifySmsMarkedCheckboxes()
})