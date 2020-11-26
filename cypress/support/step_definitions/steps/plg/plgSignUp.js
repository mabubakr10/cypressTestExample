const USERNAME_INPUT = '#1-email'
const PASSWORD_INPUT = 'input[name="password"]'
const SUBMIT_BUTTON = 'button[name="submit"]'
const emailPLG = 'test+' + Math.floor(Math.random() * 99999) + '@sendoso.com'
const password = 'Admin123456!'

class plgUserSignUp {

    constructor() {
        this.dataSet = null
    }

    static clickGenerateLink() {
        cy.get('#admin-tabs > li:nth-child(14) > a').click()
    }

    static clickGenerateButton() {
        cy.get('[data-target="#self_serve_sign_up_modal_"]').click()
    }

    static addPlgEmail() {
        cy.get('input[id="reference_code_email"]').type(emailPLG)
    }

    static createLinkButton() {
        cy.get('[type="submit"]').click()
    }

    static closePopUp() {
        cy.get('h2[id="swal2-title"]').contains('Good job!')
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
    }

    static logOutAdmin() {
        cy.get('h2[id="swal2-title"]').contains('Good job!')
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
    }

    static getLinkPlg() {
        cy.get(".table-condensed tr:first-child td:first-child").invoke('text').then((text) => {
            cy.log('token ' + text)
            cy.get('a[href="/user_logout"]').click()
            cy.clearCookies({ log: true })
            cy.clearLocalStorage('test', { log: true })
            cy.forceVisit(text)
        })
    }

    static completeSignUpForm() {
        cy.get('input[id="first_name"]').type('first-name-here')
        cy.get('input[id="last_name"]').type('last-name-here')
        cy.get('input[id="company_name"]').type('company-name-here')
        cy.get('input[placeholder="Password"]').type(password)
        cy.get('input[placeholder="Retype Password"]').type(password)
        cy.get('[class="stl-form__checkbox stl-form__checkbox--custom"]').click()
        cy.get('[id="sign-up-btn"]').click()
    }

    static logInPlg() {
        cy.get('input[placeholder="Email Address"]').invoke('text').then((plgEmail) => {
            cy.get('button[id="sign-up-btn"]').click()
            cy.get(USERNAME_INPUT).type(plgEmail)
            cy.get(PASSWORD_INPUT).type(this.data.password)
            cy.get(SUBMIT_BUTTON).click()
        })
    }

    static onboardingForm() {
        cy.get('ul').eq(0).select('Other')
        cy.get('ul').eq(1).select('Other')
        cy.get('ul').eq(2).select('Individual Contributor')
        cy.get('button[id="continue"]').click()
    }

    static addCC() {
        cy.get('input[class="stl-form__input fs-exclude unknown"]').type(this.data.numberCC)
        cy.get('input[placeholder="MM/YY"]').type(this.data.expiryCC)
        cy.get('input[placeholder="CVV"]').type(this.data.cvcCC)
        cy.get('button[id="addCreditCard"]').click()
    }

    static closeSurvey() {
        cy.get('div[title="Close Survey"]').click()
    }

    static verifyUserPlg() {
        cy.get('div[class="stl-text-size-12 stl-text-grays-5 stl-mb-3 stl-pl-4"]').should($el => expect($el.text().trim()).to.equal('UPGRADE'));
    }
}
export default plgUserSignUp
