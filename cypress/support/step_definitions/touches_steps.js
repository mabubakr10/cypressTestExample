import { Given, When, Then, And,Before } from 'cypress-cucumber-preprocessor/steps'
import touchPage from './steps/touchPage'

Before(() =>
{
    cy.viewport(1920, 1080)
});

Given( /^I click on "([^"]*)" Tab$/,  touches=>{
    touchPage.clickTab(touches);

} );

Given( /^I click on create New Touch button$/, function () {
    touchPage.clickCreateNewTouch();
} );

Given( /^I select touch under Inventoried Sends at index$/, ()=> {
touchPage.selectTouchtype();
} );

Then( /^I click on the next step of the create touch$/, function () {
touchPage.clickNextbutton();
} );

Then( /^I select product from existing items$/, ()=> {
    touchPage.selectProduct();
} );

Then( /^I select charge cost to"$/, ()=> {
    touchPage.selectChargeCostTo();
} );

Then( /^I select funding source to associate touch$/, ()=> {
touchPage.selectFundingSource()
} );

Then( /^I edit up the touchName appearing at the page of enter touch details$/, ()=> {
touchPage.editTouchName();
} );

Then( /^I enter the display name for sender$/, ()=> {
    touchPage.enterDisplayName();
} );

Then( /^I click on the Finish button appearing on add touch to group page$/, function () {
    touchPage.clickFinishButton();
} );

Then( /^I click on Send button$/, function () {
    touchPage.clickSendButton();
} );

Then( /^I select touch$/, ()=> {
touchPage.selectTouch();
} );

Then( /^I select the option to send touch to$/, ()=> {
touchPage.selectoptionToSendTouchTo();
} );

Then( /^I enter custom message for touch$/, ()=> {
    touchPage.enterCustomMessage();
} );

Then( /^I enter Mailing Address$/, ()=> {
touchPage.enterMailingAddress();
} );

Then( /^I Enter Recipients Email$/, ()=> {
touchPage.enterRecipientEmail();
} );

Then( /^I Enter Recipients Full$/, ()=> {
touchPage.enterFullName();
} );

Then( /^I verify that user is on the sales force tracking page$/, function () {
touchPage.verifySaleForceTrackingPage();
} );

Then( /^I click on "([^"]*)" button on screen$/, buttonToClick=> {
    touchPage.sendTouch(buttonToClick);
} );

Then( /^I verify action has been performed with message$/, ()=> {
touchPage.verifyActionPerformed();
} );

Then( /^I click on okay button$/, function () {
touchPage.clickOkayButton();
} );