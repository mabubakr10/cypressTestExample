class sendosoDirectTouch {
    constructor() {
        this.dataSet = null
    }

    static clickSendosoDirectTab() {
        cy.get('.collection .stl-list > li:nth-child(3) .stl-button').click()
    }

    static selectSendosoDirectSend(input) {
        cy.get('[class="stl-grid-row"]' + 'img[alt=' + input + ']').click()
    }

    static selectHowToSendSendosoDirect(input) {
        cy.get('[name="send_option"]').select(input).should('have.value', '6')
    }

    static singleEmailSendDirect() {
        cy.get('[id="send_name"]').type('Sendoso Direct')
        cy.get('[id="street_number"]').type(this.data.address)
        cy.get('[id="locality"]').type(this.data.city)
        cy.get('[id="administrative_area_level_1"]').type(this.data.state)
        cy.get('[id="postal_code"]').type(this.data.zip)
        cy.get('[id="country"]').type(this.data.country)
        cy.get('Add your message here').type('This is a Sendoso Direct Send')
    }

    static sendSendosoDirectTouch() {
        cy.get('[id="send_submit"]').click()
    }
}
export default sendosoDirectTouch
