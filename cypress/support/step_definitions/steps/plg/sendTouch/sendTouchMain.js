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

    static sendSummaryPayButton() {
        cy.get('[id="pay-btn"]').click()
    }

    static verifyPreCreatedTouches() {
        cy.get('[class="stl-card__content"] h3').invoke('text').should((eGifts) => {

            expect(eGifts.size()).to.equal(10)
        })
    }
}
export default touchMain
