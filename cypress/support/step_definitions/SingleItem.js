import { Given, When, Then, And,Before } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from "./steps/loginPage";
import FP1046_Single_item_send_steps from "./steps/FP1046_Single_item_send_steps";


Then(/^I click on the Send button$/, function () {
    FP1046_Single_item_send_steps.clickSendBtn();
});
Then(/^I click on the single item touch$/, function () {
    FP1046_Single_item_send_steps.clickSingleItemtouch()
});
Given(/^I close up the pop up button after login$/, function () {
    cy.wait(3000)
    LoginPage.closePopUp()
});
Then(/^I signout of the application$/, function () {
    FP1046_Single_item_send_steps.signout()
});
Then(/^I select single send method of sending$/, function () {
    FP1046_Single_item_send_steps.selectsingleitemsend()
});
Then(/^I add mailing address$/, function () {
    FP1046_Single_item_send_steps.AddressPick()
});
Given(/^I close the cameo pop up$/, function () {
    FP1046_Single_item_send_steps.CloseCameo()
});
Then(/^I add the Suite$/, function () {
    FP1046_Single_item_send_steps.Suite()
});
Then(/^I add the City$/, function () {
    FP1046_Single_item_send_steps.City()
});
Then(/^I add the State$/, function () {
    FP1046_Single_item_send_steps.State()
});
Then(/^I add the country$/, function () {
    FP1046_Single_item_send_steps.Country()
});
Then(/^I add the Zip$/, function () {
    FP1046_Single_item_send_steps.Zip()
});
Then(/^I click on the OK button$/, function () {
    FP1046_Single_item_send_steps.ClickOK()
});
Then(/^I add the Recipient Name$/, function () {
    FP1046_Single_item_send_steps.RecipientName()
});
Then(/^I click on the Send button to send the touch$/, function () {
    FP1046_Single_item_send_steps.clickSendButton()
});
Given(/^I fill username with of sendoso applicaton "([^"]*)"$/, function () {
    LoginPage.enterUserName();
});
Given(/^I fill password with of sendoso applicaton "([^"]*)"$/, function () {
    LoginPage.fillPassword()
});