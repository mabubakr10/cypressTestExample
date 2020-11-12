import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import sideBar from '../../steps/plg/sideBarPanel'
import eGiftTouch from '../../steps/plg/sendTouch/sendEGift'
import directTouch from '../../steps/plg/sendTouch/sendSendosoDirect'
import touchMain from '../../steps/plg/sendTouch/sendTouchMain'
import accountBalanceView from '../../steps/plg/accountBalance/viewAccountBalance';

Before(() => {
    cy.viewport(1920, 1080)
});

And('I click the Send button', () => {
    sideBar.sendTouchButton()
})

And('I click the eGifts Main tab', () => {
    eGiftTouch.clickeGiftsTab()
})

And('I click the Sendoso Direct Main tab', () => {
    directTouch.clickSendosoDirectTab()
})

And('I select an eGift Touch', () => {
    eGiftTouch.selectGiftCard('Amazon Gift Card')
})

And('I select a Sendoso Direct Touch', () => {
    directTouch.selectSendosoDirectSend('SnackNation - 15 Snack Box')
})

And('I select How to send the touch from drop down', () => {
    eGiftTouch.selectHowToSend('To a single Email address')
})

And('I select How to send the Sendoso Direct from drop down', () => {
    directTouch.selectHowToSendDirect('To a group of people (Upload Excel CSV)')
})

And('I add details for the send touch to single email', () => {
    eGiftTouch.singleEmailSend()
})

And('I click the Send touch button after adding details', () => {
    eGiftTouch.sendEGiftTouch()
})

And('I click the Pay button on Send Summary view', () => {
    touchMain.sendSummaryPayButton()
})

And('I verify the eGift sent success message appears and click Okay', () => {
    eGiftTouch.sendEGiftSuccessMessage()
})

Then('I verify the todays date and touch was eGift item', () => {
    accountBalanceView.activityFeedView()
})

Then('I verify the pre-created touches', () => {
    touchMain.verifyPreCreatedTouches()
})
