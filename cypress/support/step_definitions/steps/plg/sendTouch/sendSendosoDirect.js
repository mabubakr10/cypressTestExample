const address = "447 Battery Street"
const city = "San Francisco"
const state =  "CA"
const zip = "94111"
const country = "US"
class sendosoDirectTouch {
    constructor() {
        this.dataSet = null
    }

    static clickSendosoDirectTab() {
        cy.get('.collection .stl-list > li:nth-child(3) .stl-button').click()
    }

    static selectSendosoDirectSend(input) {
        cy.get('[class="stl-grid-row"]'+' img[alt="'+input+'"]').click()

    }

    static selectHowToSendSendosoDirect(input) {
        cy.get('[name="send_option"]').select(input).should('have.value', '5')
    }

    static singleEmailSendDirect() {
        cy.get('[id="send_name"]').type('Sendoso Direct')
        cy.get('[id="street_number"]').type(address)
        cy.get('[id="locality"]').type(city)
        cy.get('[id="administrative_area_level_1"]').type(state)
        cy.get('[id="postal_code"]').type(zip)
        cy.get('[id="country"]').type(country)
        cy.switchToIframe('[id="send_custom_message_ifr"]').type('This is a Sendoso Direct Send')
    }

    static sendSendosoDirectTouch() {
        cy.get('[id="send_submit"]').click()
    }

    static selectHowToSendDirect(input) {
        cy.get('[name="send_option"]').select(input).should('have.value', '5')
    }
}
export default sendosoDirectTouch
