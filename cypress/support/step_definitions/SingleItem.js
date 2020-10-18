import { Given, When, Then, And,Before } from 'cypress-cucumber-preprocessor/steps'

Then(/^I click on the Send button$/, function () {
    cy.xpath(By.linkText("Send")).click
});
Then(/^I click on the single item touch$/, function () {
    cy.xpath("//*[@id" +
        "" +
        "=\"send_page_touches\"]/div/label").click()
});