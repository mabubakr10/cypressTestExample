<<<<<<< HEAD
class plgUserSignUp {
=======
class contactUsLink {
>>>>>>> 9e57cea... [PN-214] verify upgrade sign is displayed on locked integrations
    constructor() {
        this.dataSet = null
    }
    
    static clickContactUsButton() {
        cy.get('[class="stl-button button--light"]').click()
    }

    static clickAllViewTab() {
        cy.get('.collection .stl-list > li:nth-child(1) .stl-button').click()
    }

    static clickeGiftsTab() {
        cy.get('.collection .stl-list > li:nth-child(2) .stl-button').click()
    }

    static clickSendosoDirectTab() {
        cy.get('.collection .stl-list > li:nth-child(3) .stl-button').click()
    }

    static clickCollectionsTab() {
        cy.get('[href="#/touch_collections"]').click()
    }
    static verifyContactUsNewTab() {
        cy.get('[href="https://sendoso.com/beta-feedback/"]').should('have.attr', 'target', '_blank')
    }

    static selectGiftCard(input) {
        cy.get('[class="stl-grid-row"]'+'img[alt='+input+']').click()
    }

    static selectHowToSend(input) {
        cy.get('[name="send_option"]').select(input).should('have.value', '6')
    }
}
<<<<<<< HEAD
export default plgUserSignUp
=======
export default contactUsLink
>>>>>>> 9e57cea... [PN-214] verify upgrade sign is displayed on locked integrations
