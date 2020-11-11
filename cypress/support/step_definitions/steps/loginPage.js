
const URL = 'https://integration-app.sendoso.com/'
const USERNAME_INPUT = '#1-email'
const PASSWORD_INPUT = 'input[name="password"]'
const SUBMIT_BUTTON = 'button[name="submit"]'
const Close_PopUp='.btn-modal-close'

class LoginPage {
 constructor() {
   this.dataSet = null
 }



  static visic() {
<<<<<<< HEAD
   // cy.getCookies().should('have.length', 1)
    cy.clearLocalStorage()
    cy.clearCookies()
=======
>>>>>>> 2cabf63... [PN-208] verify send summary show/hide functionality
    cy.visit(URL)

    //cy.clearCookies()
/*    cy.reload(true)
    cy.clearCookies()
    */
  }
  static fillUsername(username) {
    cy.get(USERNAME_INPUT).type(username)
    console.log(username)
  }

  static fillPassword(password) {
    debugger
    cy.get(PASSWORD_INPUT).type(this.data.password)
  }

  static submit() {
    cy.get(SUBMIT_BUTTON).click()
    //cy.get(Close_PopUp).click()
  }

   static readFileJson(fileName, key) {
    cy.readFile("cypress/fixtures/profiles.json").then(jsonObj => {
      this.data = jsonObj[key]
    });
  }

  static switchToFrameFun()
  {
    const frameToSwitch="#mce_0_ifr";
    cy.visit('https://the-internet.herokuapp.com/iframe');
    cy.switchToIframe(frameToSwitch).clear().type("testing");
  }

}
export default LoginPage
