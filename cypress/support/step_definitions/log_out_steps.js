import { And, Before } from "cypress-cucumber-preprocessor/steps";
import signOut from "../../support/step_definitions/steps/logOut";

Before(() => {
  cy.viewport(1280, 800);
});

And("I click on profile button at the top", () => {
  signOut.clickProfile();
});

And("I click on sign out option in the dropdown", () => {
  signOut.clickSignout();
});
