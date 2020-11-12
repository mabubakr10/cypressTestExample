
const URL = 'https://integration-app.sendoso.com/'
const USERNAME_INPUT = '#1-email'
const PASSWORD_INPUT = 'input[name="password"]'
const SUBMIT_BUTTON = 'button[name="submit"]'
<<<<<<< HEAD
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
=======
const Close_PopUp = '.btn-modal-close'

class LoginPage {
  constructor() {
    this.dataSet = null
  }

  static visic() {
    cy.visit(URL)

  }
  static fillUsername(username) {
    cy.get(USERNAME_INPUT).type(username)
  }

  static fillPassword(password) {
>>>>>>> 9fc591c77e8392229681b368da0d4fec4e904bdd
    cy.get(PASSWORD_INPUT).type(this.data.password)
  }

  static submit() {
    cy.get(SUBMIT_BUTTON).click()
<<<<<<< HEAD
    //cy.get(Close_PopUp).click()
  }

   static readFileJson(fileName, key) {
=======
  }

  static readFileJson(fileName, key) {
>>>>>>> 9fc591c77e8392229681b368da0d4fec4e904bdd
    cy.readFile("cypress/fixtures/profiles.json").then(jsonObj => {
      this.data = jsonObj[key]
    });
  }

<<<<<<< HEAD
  static switchToFrameFun()
  {
    const frameToSwitch="#mce_0_ifr";
=======
  static switchToFrameFun() {
    const frameToSwitch = "#mce_0_ifr";
>>>>>>> 9fc591c77e8392229681b368da0d4fec4e904bdd
    cy.visit('https://the-internet.herokuapp.com/iframe');
    cy.switchToIframe(frameToSwitch).clear().type("testing");
  }

}
export default LoginPage
