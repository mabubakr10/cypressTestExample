import sidenavigation from "../../../fixtures/locators.json";

class sideNav {
  constructor() {
    this.dataSet = null;
  }

  static clickIntegration() {
    cy.get(sidenavigation.integrationsBtn).click();
  }
}
export default sideNav;
