import LoginPage from "./loginPage"
const USERNAME_INPUT = '#1-email'
const PASSWORD_INPUT = 'input[name="password"]'
const SUBMIT_BUTTON = 'button[name="submit"]'
const Close_PopUp='.btn-modal-close'

class FP1046 {


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
       cy.get("#street_number").type(LoginPage.data.MailingAdd)
        cy.get("#street_number").click()
    }
    static Suite(){
        cy.get("#route").type(LoginPage.data.Floor)
    }
    static City(){
        cy.get("#locality").type(LoginPage.data.City)
    }
    static State(){
        cy.get("#administrative_area_level_1").type(LoginPage.data.State)
    }
    static Zip(){
        cy.get("#postal_code").type(LoginPage.data.Zip)
    }
    static Country(){
        cy.get("#country").type(LoginPage.data.Country)
    }
    static RecipientName(){
        cy.get("#send_name").type(LoginPage.data.RecipientName)
    }
}

export default FP1046