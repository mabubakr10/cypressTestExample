import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import sideBar from '../../steps/plg/sideBarPanel'
import eGiftTouch from '../../steps/plg/sendTouch/sendEGift'
import sendosoDirectTouch from '../../steps/plg/sendTouch/sendSendosoDirect'
import touchMain from '../../steps/plg/sendTouch/sendTouchMain'
import accountBalanceView from '../../steps/plg/accountBalance/viewAccountBalance'


Before(() => {
    cy.viewport(1920, 1080)
});

And('I click the Send button', () => {
    sideBar.sendTouchButton()
})

And('I click the eGift Tab', () => {
    eGiftTouch.clickeGiftsTab()
})

And('I click the Sendoso Direct Tab', () => {
    sendosoDirectTouch.clickSendosoDirectTab()
})

And('I select an eGift Touch', () => {
    eGiftTouch.selectGiftCard('Amazon Gift Card')
})

And('I select a Sendoso Direct Touch', () => {
   sendosoDirectTouch.selectSendosoDirectSend('SnackNation - 15 Snack Box')
})

And('I select How to send the eGift touch from drop down', () => {
    eGiftTouch.selectHowToSendeGift('To a single Email address')
})

And('I select How to send the Sendoso Direct touch from drop down', () => {
    sendosoDirectTouch.selectHowToSendSendosoDirect('To a single person/company')
})

And('I add details for the send eGift touch to single email', () => {
    eGiftTouch.singleEmailSendeGift()
})

And('I add details for the send Sendoso Direct touch to single person/company', () => {
    sendosoDirectTouch.singleEmailSendDirect()
})

And('I click the Send eGift touch button after adding details', () => {
    eGiftTouch.sendEGiftTouch()
})

And('I click the Send Sendoso Direct touch button after adding details', () => {
    sendosoDirectTouch.sendSendosoDirectTouch()
})

And('I click the (Dont Show Summary) checkbox', () => {
    touchMain.dontShowSummaryCheckbox()
})

And('I click the Pay button on Send Summary view', () => {
    touchMain.sendSummaryPayButton()
})

Then('I verify the sent success message appears and click Okay', () => {
    eGiftTouch.sendSuccessMessage()
})
Then ('I verify the todays date and touch was eGift item', () => {
    accountBalanceView.activityFeedView()
})

Then('I verify the pre-created touches', () => {
    touchMain.verifyPreCreatedTouches()
})
