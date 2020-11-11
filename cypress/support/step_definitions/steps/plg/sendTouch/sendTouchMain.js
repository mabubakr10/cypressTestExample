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

<<<<<<< HEAD
    static sendSuccessMessage() {
        cy.get('[class="stl-modal__title"]').should('have.text', 'Successfully Sent!')
        cy.get('[class="stl-button stl-button--primary close-modal"]').click()
=======
    static verifyPreCreatedTouches() {
        cy.get('[class="stl-card__content"] h3').invoke('text').should((touches) => {

            expect(touches.size()).to.equal(10)
        })
>>>>>>> 5777ab5... [PN-201] verify both eGifts and Sendoso Direct pre created touches are available for PLG user
    }
}
export default touchMain
