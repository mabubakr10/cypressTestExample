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

    static verifyPreCreatedTouches() {
        cy.get('[class="stl-card__content"] h3').invoke('text').should((touches) => {

            expect(touches.size()).to.equal(10)
        })
    }

    static eGiftSuccessMessage() {
        cy.get('[class="stl-modal__body"] p').invoke('text').should((success) => {

            expect(success).to.include('Your eGift is on its way')
        })

        cy.get('[class="stl-button stl-button--primary close-modal"]').click()
    }

    static directSuccessMessage() {
        cy.get('[class="stl-modal__body"] p').invoke('text').should((success) => {

            expect(success).to.include('when your package is shipped and delivered')
        })

        cy.get('[class="stl-button stl-button--primary close-modal"]').click()
    }
}
export default touchMain
