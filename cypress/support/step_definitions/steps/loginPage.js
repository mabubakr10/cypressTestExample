const URL = 'https://core-qa.sendoso.com/'
const USERNAME_INPUT = '#1-email'
const PASSWORD_INPUT = 'input[name="password"]'
const SUBMIT_BUTTON = 'button[name="submit"]'
const Close_PopUp = '.btn-modal-close'

class LoginPage {

  static visic() {
    cy.visit(URL)
    console.log("Hitting Core QA URL");
  }

  static fillPassword() {
    cy.get(PASSWORD_INPUT).type(this.data.password)
  }

  static submit() {
    cy.get(SUBMIT_BUTTON).click()
  }

  static readFileJson(fileName, key) {
    cy.readFile("cypress/fixtures/profiles.json").then(jsonObj => {
      this.data = jsonObj[key]
    });
  }

  static closePopUp() {
    cy.get(Close_PopUp).click({ timeout: 3000, multiple: true, force: true });
  }

  static closePopupAdvertise() {
    cy.get('.wm-visual-design-canvas svg.wm-ignore-css-reset').click({ timeout: 2000, multiple: true, force: true })
  }

  static enterUserName() {
    cy.get(USERNAME_INPUT).type(this.data.username)
    console.log("Entered" + this.data.username + " inside username  field")
  }

  static enterPassword() {
    cy.get(PASSWORD_INPUT).type(this.data.password)
  }
}
export default LoginPage
