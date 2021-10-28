import { And, Before } from "cypress-cucumber-preprocessor/steps";
import APIactions from "../../support/step_definitions/steps/apiCall";

Before(() => {
  cy.viewport(1280, 800);
});

And("I load sdk and get response", () => {
  APIactions.loadSdk();
});
