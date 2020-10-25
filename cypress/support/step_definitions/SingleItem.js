import { Given, When, Then, And,Before } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from "./steps/loginPage";
import FP1046 from "./steps/FP1046";

Then(/^I click on the Send button$/, function () {
    { force: true }
    cy.wait(3000)
    cy.get('.send-action').click()
});
Then(/^I click on the single item touch$/, function () {
    { force: true }
    cy.wait(3000)
    cy.xpath("//div[@class='col-sm-4 egift_radio_btn_div'][1]").click()
});
Given(/^I close up the pop up button after login$/, function () {
    cy.wait(3000)
    LoginPage.closePopUp()
});
Then(/^I signout of the application$/, function () {
    { force: true }
    cy.wait(2000)
    cy.xpath("//*[@id=\"global_nav_sidebar\"]/div/div[4]/nav/ul/li[3]/a").click()
    cy.wait(2000)
    cy.xpath("//*[@id=\"global_nav_sidebar\"]/div/div[4]/nav/ul/li[3]/div/a[2]").click()
});
Then(/^I select single send method of sending$/, function () {
    { force: true }
    cy.wait(2000)
    cy.get('.container > .row > .col-md-4 > .form-group > #send_option').select('4')
});
Then(/^I add mailing address$/, function () {
    FP1046.AddressPick()
});
Given(/^I close the cameo pop up$/, function () {
    cy.get('.wm-visual-design-canvas svg.wm-ignore-css-reset').click({timeout:2000, multiple: true ,force: true})
});
Then(/^I add the Suite$/, function () {
    FP1046.Suite()
});
Then(/^I add the City$/, function () {
    FP1046.City()

});
Then(/^I add the State$/, function () {
    FP1046.State()
});
Then(/^I add the country$/, function () {
    FP1046.Country()
});
Then(/^I add the Zip$/, function () {
    FP1046.Zip()
});
Then(/^I click on the OK button$/, function () {
    cy.xpath("//button[@class='swal2-confirm swal2-styled']").click()
});
Then(/^I add the Recipient Name$/, function () {
    FP1046.RecipientName()
});
Then(/^I click on the Send button to send the touch$/, function () {
    cy.get("#send_submit").click()
});
Given(/^I fill username with of sendoso applicaton "([^"]*)"$/, function () {
    LoginPage.enterUserName();
});
Given(/^I fill password with of sendoso applicaton "([^"]*)"$/, function () {
    LoginPage.fillPassword()
});