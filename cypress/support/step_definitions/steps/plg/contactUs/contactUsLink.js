class plgUserSignUp {
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
        cy.get('[class="stl-button button--light"]').should('have.attr', 'target', '_blank')
    }

    static selectGiftCard(input) {
        cy.get('[class="stl-grid-row"]'+'img[alt='+input+']').click()
        //[class="stl-grid-row"] img[alt="Amazon Gift Card"]
    }

    static selectHowToSend(input) {
        cy.get('[name="send_option"]').select(input).should('have.value', '6')
    }
}
export default plgUserSignUp