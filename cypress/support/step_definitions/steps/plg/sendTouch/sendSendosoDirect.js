class sendosoDirectTouch {
    constructor() {
        this.dataSet = null
    }

    static clickSendosoDirectTab() {
        cy.get('.collection .stl-list > li:nth-child(3) .stl-button').click()
    }

    static selectSendosoDirectSend(input) {
        cy.get('[class="stl-grid-row"]'+'img[alt='+input+']').click()
    }

    static selectHowToSendDirect(input) {
        cy.get('[name="send_option"]').select(input).should('have.value', '5')
    }
}
export default sendosoDirectTouch
