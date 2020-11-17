import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import sideBar from '../steps/plg/sideBarPanel'
import accountBalanceView from '../steps/plg/accountBalance/viewAccountBalance'
import staticPages from '../steps/plg/plgStaticPages'

Before(() => {
    cy.viewport(1920, 1080)
});

And('I click on the Account Balance Module', () => {
    sideBar.selectModule('Account Balance')
})

And ('I click on the Plan & Billing Tab', () => {
    accountBalanceView.selectBillingTab()
})

And ('I click on the Invoices & Receipts Tab', () => {
    accountBalanceView.selectInvoiceTab()
})

And ('I verify the Plan name', () => {
    accountBalanceView.verifyBillingPlan()
})

And ('I click on replace the credit card button', () => {
    accountBalanceView.addReplaceCreditCardOption()
})

And ('I add or replace the credit card info', () => {
    accountBalanceView.addReplaceCreditCardForm()
})

And ('I click the Add button to save info', () => {
    accountBalanceView.addReplaceCCButtonAdd()
})

And ('I click the Cancel button to revert info', () => {
    accountBalanceView.addReplaceCCButtonCancel()
})

Then ('I verify the card is saved', () => {
    accountBalanceView.verifyBillingInfo()
})

Then ('I verify the last send touch invoice is logged', () => {
    accountBalanceView.verifyInvoicesReceipts()
})

And ('I click on the Activity Feed Tab', () => {
    accountBalanceView.selectActivityTab()
})

And ('I verify the todays date for the sent touch', () => {
    accountBalanceView.activityFeedView()
})

Then ('I verify Activity Feed is a static page', () => {
    staticPages.verifyStaticActivityFeed()
})
