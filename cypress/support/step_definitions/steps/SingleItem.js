
const USERNAME_INPUT = '#1-email'
const PASSWORD_INPUT = 'input[name="password"]'
const SUBMIT_BUTTON = 'button[name="submit"]'
const Close_PopUp='.btn-modal-close'

class SingleItem {
    constructor() {
        this.dataSet = null
    }

    static visic() {
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit(this.data.url)
    }
    static fillUsername(username) {
        cy.get(USERNAME_INPUT).type(username)
        console.log(username)
    }

    static submit() {
        cy.get(SUBMIT_BUTTON).click()
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
    static AddressPick()
    {
 //       cy.get(By.id("send_name")).type(this

    }

}

export default SingleItem