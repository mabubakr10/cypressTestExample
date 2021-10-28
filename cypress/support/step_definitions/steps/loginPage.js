import signUp from "../../../fixtures/locators.json";
import profiles from "../../../fixtures/profiles.json";

const faker = require("faker");

let email = faker.internet.email();

class LoginPage {
  constructor() {
    this.dataSet = null;
  }

  static visitIntegry() {
    cy.clearCookies();
    cy.clearLocalStorage("test", { log: true });
    cy.forceVisit(profiles.integry.url);
  }

  static clickSignIn() {
    cy.get(signUp.loginBtn).click();
  }

  static readFileJson(fileName, key) {
    cy.readFile("cypress/fixtures/profiles.json").then((jsonObj) => {
      this.data = jsonObj[key];
    });
  }

  static clickSignUpLink() {
    cy.get(signUp.signUpLink).click();
  }

  static addEmail() {
    cy.get(signUp.emailField).type(email);
  }

  static addPassword() {
    cy.get(signUp.passwordField).type(profiles.integry.password);
  }

  static clickContinue() {
    cy.get(signUp.loginBtn).click();
  }

  static clickAccept() {
    cy.get(signUp.acceptBtn).click();
  }

  static verifyDashboard() {
    cy.get(signUp.DashboardHeading).should("have.text", "Dashboard");
  }
}
export default LoginPage;
