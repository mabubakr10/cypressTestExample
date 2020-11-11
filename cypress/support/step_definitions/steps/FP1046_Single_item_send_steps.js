import LoginPage from "./loginPage"
const USERNAME_INPUT = '#1-email'
const PASSWORD_INPUT = 'input[name="password"]'
const SUBMIT_BUTTON = 'button[name="submit"]'
const Close_PopUp='.btn-modal-close'

class FP1046_Single_item_send_steps {
    static visic() {
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit(this.data.url)
    }
    static fillUsername(username) {
        cy.get(USERNAME_INPUT).type(username)
        console.log(username)
    }
    static clickSendBtn(){
        { force: true }
        cy.get('.send-action').click()
    }
    static clickSingleItemtouch(){
        { force: true }
        cy.xpath("//div[@class='col-sm-4 egift_radio_btn_div'][1]").click()
    }
    static signout(){
        { force: true }
        cy.xpath("//*[@id=\"global_nav_sidebar\"]/div/div[4]/nav/ul/li[3]/a").click()
        cy.xpath("//*[@id=\"global_nav_sidebar\"]/div/div[4]/nav/ul/li[3]/div/a[2]").click()
    }
    static selectsingleitemsend(){
        { force: true }
        cy.get('.container > .row > .col-md-4 > .form-group > #send_option').select('4')
    }
    static clickSendButton(){
        cy.get("#send_submit").click()
    }
    static CloseCameo(){
        cy.get('.wm-visual-design-canvas svg.wm-ignore-css-reset').click({timeout:2000, multiple: true ,force: true})
    }

    static ClickOK(){
        cy.xpath("//button[@class='swal2-confirm swal2-styled']").click()
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

export default FP1046_Single_item_send_steps