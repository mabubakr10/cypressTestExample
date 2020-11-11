class eGiftTouch {
    constructor() {
        this.dataSet = null
    }
    
    static clickeGiftsTab() {
        cy.get('.collection .stl-list > li:nth-child(2) .stl-button').click()
    }

    static selectGiftCard(input) {
        cy.get('[class="stl-grid-row"]'+'img[alt='+input+']').click()
    }

    static selectHowToSend(input) {
        cy.get('[name="send_option"]').select(input).should('have.value', '6')
    }

    static singleEmailSend() {
        cy.get('[id="send_email"]').type('test@sendoso.com')
        cy.get('[id="send_email"]').select('$100').should('have.value', '100')
        cy.get('[class="custom-placeholder-label tinymce-placeholder"]').type('This is an automated test')
    }

    static sendEGiftTouch() {
        cy.get('[class="btn btn-primary btn-lg send_to_single_email fund_check_button"]').click()
    }

    static sendEGiftSuccessMessage() {
        cy.get('[class="stl-modal__title"]').should('have.text', 'Successfully Sent!')
        cy.get('[class="stl-button stl-button--primary close-modal"]').click()
    }
}
export default eGiftTouch