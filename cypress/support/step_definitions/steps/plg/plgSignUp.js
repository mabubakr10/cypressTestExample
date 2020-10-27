const USERNAME_INPUT = '#1-email'
const PASSWORD_INPUT = 'input[name="password"]'
const SUBMIT_BUTTON = 'button[name="submit"]'
const emailPLG = 'test+' + Math.floor(Math.random() * 99999) + '@sendoso.com'

class plgUserSignUp {
    constructor() {
        this.dataSet = null
    }
    
    static clickGenerateLink() {
        cy.get('#admin-tabs > li:nth-child(26) > a').click()
    }

    static clickGenerateButton() {
        cy.get('[data-target="#self_serve_sign_up_modal_"]').click()
    }

    static addPlgEmail() {
        cy.get('input[id="reference_code_email"]').type(emailPLG)
        console.log(emailPLG)
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
        const token = cy.get(".table-condensed tr:first-child td:first-child").invoke('text').then((text) => {
            return text
        })

        cy.log('token ' + token)
        cy.get('a[href="/user_logout"]').click()
        cy.clearCookies({ log: true })
        cy.clearLocalStorage('test', { log: true })
        cy.visit(token)
    }

    static completeSignUpForm() {
        cy.get('input[id="first_name"]').type('first-name-here')
        cy.get('input[id="last_name"]').type('last-name-here')
        cy.get('input[id="company_name"]').type('company-name-here')
        cy.get('input[id="password"]').type((this.data.password))
        cy.get('input[id="confirm_password"]').type((this.data.password))
        cy.get('label[for="check-me"]').click()
        cy.get('button[id="sign-up-btn"]').click()
    }

    static logInPlg() {
        cy.get(USERNAME_INPUT).type(emailPLG)
        cy.get(PASSWORD_INPUT).type(this.data.password)
        cy.get(SUBMIT_BUTTON).click()
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
        cy.get('span[class="icon icon-lock stl-mr-3"]').should('have.text', 'UPGRADE')
    }
}
export default plgUserSignUp



        //var token = cy.get('.table-condensed tr:first-child td:first-child').invoke('text').then((text1) => { return text1})
        //var token = cy.get('.table-condensed tr:first-child td:first-child').text()
        //cy.pause()
        // var token = cy.get('.table-condensed tr:first-child td:first-child').should(($td) => {
        //     const text = $td.text()
        //     return text
        // })
        //var token = cy.get('.table-condensed tr:first-child td:first-child').getText();
        //var token = cy.get('.table-condensed ').find('tr:first-child td:first-child').invoke('text').then((text => {return text}))
