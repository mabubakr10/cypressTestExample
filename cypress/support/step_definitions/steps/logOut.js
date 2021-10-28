import signOut from "../../../fixtures/locators.json";
import profiles from "../../../fixtures/profiles.json";

class LogoutPage {
  constructor() {
    this.dataSet = null;
  }

  static clickProfile() {
    cy.get(signOut.profileBtn).click();
  }

  static clickSignout() {
    cy.get(signOut.signOutBtn).click();
  }
}
export default LogoutPage;
