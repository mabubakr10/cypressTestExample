import { Given, When, Then, And,Before } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from "./steps/loginPage";

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
    LoginPage.closePopup()
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