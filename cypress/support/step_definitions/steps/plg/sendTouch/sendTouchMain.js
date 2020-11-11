class touchMain {
    constructor() {
        this.dataSet = null
    }
    
    static clickAllViewTab() {
        cy.get('.collection .stl-list > li:nth-child(1) .stl-button').click()
    }

    static clickCollectionsTab() {
        cy.get('[href="#/touch_collections"]').click()
    }

    static dontShowSummaryCheckbox() {
        cy.get('[id="checkboxText"]').click()
    }

    static sendSummaryPayButton() {
        cy.get('[id="pay-btn"]').click()
    }

    static sendSuccessMessage() {
        cy.get('[class="stl-modal__title"]').should('have.text', 'Successfully Sent!')
        cy.get('[class="stl-button stl-button--primary close-modal"]').click()
    }
}
export default touchMain
