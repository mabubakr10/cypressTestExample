import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import sideBar from '../steps/plg/sideBarPanel'
import accountBalanceView from '../steps/plg/accountBalance/viewAccountBalance'

Before(() => {
    cy.viewport(1920, 1080)
});

And('I click on the Account Balance Module', () => {
    sideBar.selectModule('Account Balance')
})

And ('I click on the Activity Feed Tab', () => {
    accountBalanceView.selectActivityTab()
})

And ('I verify the todays date for the sent touch', () => {
    accountBalanceView.activityFeedView()
})
