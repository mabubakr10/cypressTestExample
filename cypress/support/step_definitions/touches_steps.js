import { Given, When, Then, And,Before } from 'cypress-cucumber-preprocessor/steps'
import touchPage from './steps/touchPage'

Before(() => {
    cy.viewport(1920, 1080)
});

Given( /^I click on "([^"]*)" Tab$/,  touches=>{
    touchPage.clickTab(touches);

} );
Given( /^I click on create New Touch button$/, function () {
    touchPage.clickCreateNewTouch();
} );
Given( /^I select "([^"]*)" touch under Inventoried Sends at index$/, toucheType=> {
touchPage.selectTouchtype(toucheType);
} );

Then( /^I click on the next step of the create touch$/, function () {
touchPage.clickNextbutton();
} );

Then( /^I select "([^"]*)" product from existing items$/, productToSelect=> {
    touchPage.selectProduct(productToSelect);
} );
Then( /^I select charge cost to "([^"]*)"$/, chargeCostTo=> {
    touchPage.selectChargeCostTo(chargeCostTo);

} );
Then( /^I select "([^"]*)" funding source to associate touch$/, fundingSource=> {
touchPage.selectFundingSource(fundingSource)
} );

Then( /^I edit up the touchName "([^"]*)" appearing at the page of enter touch details$/, touchName=> {
touchPage.editTouchName(touchName);
} );
Then( /^I enter the display name "([^"]*)" for sender$/, displayname=> {
    touchPage.enterDisplayName(displayname);

} );
Then( /^I click on the Finish button appearing on add touch to group page$/, function () {
    touchPage.clickFinishButton();
} );
Then( /^I click on Send button$/, function () {
    touchPage.clickSendButton();

} );
Then( /^I select "([^"]*)" touch$/, touch=> {
touchPage.selectTouch(touch);
} );

Then( /^I select the "([^"]*)"option to send touch to$/, sendtouchTo=> {
touchPage.selectoptionToSendTouchTo(sendtouchTo);
} );
Then( /^I enter "([^"]*)" custom message for touch$/, custommessage=> {
    touchPage.enterCustomMessage(custommessage);

} );
Then( /^I enter "([^"]*)" Mailing Address$/, mailingAddress=> {
touchPage.enterMailingAddress(mailingAddress);
} );
Then( /^I Enter "([^"]*)" Recipients Email$/, recipientsEmail=> {
touchPage.enterRecipientEmail(recipientsEmail);
} );
Then( /^I Enter "([^"]*)"Recipients Full$/, fullName=> {
touchPage.enterFullName(fullName);
} );
Then( /^I verify that user is on the sales force tracking page$/, function () {
touchPage.verifySaleForceTrackingPage();
} );

Then( /^I click on "([^"]*)" button on screen$/, buttonToClick=> {
    touchPage.sendTouch(buttonToClick);
} );
Then( /^I verify action has been performed with message "([^"]*)"$/, message=> {
touchPage.verifyActionPerformed(message);
} );
Then( /^I click on okay button$/, function () {
touchPage.clickOkayButton();
} );