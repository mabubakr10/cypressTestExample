import {
  Given,
  When,
  Then,
  And,
  Before,
} from "cypress-cucumber-preprocessor/steps";
import SignUpPage from "../../support/step_definitions/steps/loginPage";

Before(() => {
  cy.viewport(1280, 800);
});

Given("I open up the integry page", () => {
  // cy.clearCookies({ log: true });
  // cy.clearLocalStorage("test", { log: true });
  SignUpPage.visitIntegry();
  cy.log(URL);
});

When(/^I read the file with the "([^"]*)" and "([^"]*)"$/, (fileName, key) => {
  let keyValues = {};
  SignUpPage.readFileJson(fileName, key);
});

And("I click on the Sign In button", () => {
  SignUpPage.clickSignIn();
});

And("I click on the Sign Up link", () => {
  SignUpPage.clickSignUpLink();
});

And("I enter email in the email field", () => {
  SignUpPage.addEmail();
});

And("I enter password in the password field", () => {
  SignUpPage.addPassword();
});

And("I click Continue button", () => {
  SignUpPage.clickContinue();
});

And("I click Accept button", () => {
  SignUpPage.clickAccept();
});

Then("I verify Dashboard Page", () => {
  SignUpPage.verifyDashboard();
});
