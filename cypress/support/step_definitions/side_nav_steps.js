import { And, Before } from "cypress-cucumber-preprocessor/steps";
import sideNav from "../../support/step_definitions/steps/sideNav";

Before(() => {
  cy.viewport(1280, 800);
});

And("I click on the Integrations from side navigation", () => {
  sideNav.clickIntegration();
});
