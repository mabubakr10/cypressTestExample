class accountBalanceView {
    constructor() {
        this.dataSet = null
    }

    static selectBillingTab() {
        cy.get('[href="#/plan-billing"]').click()
    }

    static selectInvoiceTab() {
        cy.get('[href="#/invoice-receipt"]').click()
    }

    static selectActivityTab() {
        cy.get('[href="#/activity-feed"]').click()
    }

    static activityFeedView() {
        cy.get('[id="transaction-data"] tr').eq(0).then(() => {
            const todaysDate = Cypress.moment().format('DD-MMM-YYYY')
            cy.get('td').eq(0).should('have.text', todaysDate)
            cy.get('td').eq(3).should('have.text', 'Touch Name: Amazon Gift Card')
            cy.get('td').eq(6).should('have.text', '$100')
        })
    }

    static verifyBillingPlan() {
        cy.get('[class="stl-card__content"] h3').invoke('text').should((text1) => {
            expect(text1).to.eq('Sendoso for Individuals')
        })
    }

    static addReplaceCreditCardOption() {
        cy.get('[class="position stl-text-secondary-0"] div').click()
    }

    static addReplaceCreditCardForm() {
        cy.get('[placeholder="1111 2222 3333 4444"]').type(this.data.numberCC)
        cy.get('input[placeholder="09/24"]').type(this.data.expiryCC)
        cy.get('input[placeholder="687"]').type(this.data.cvcCC)
    }

    static addReplaceCCButtonAdd() {
        cy.get('add Card').click()
    }

    static addReplaceCCButtonCancel() {
        cy.get('[class="stl-button stl-button_outline--gray"]').click()
    }

    static verifyBillingInfo() {
        cy.get('[class="stl-grid-col"] h4').invoke('text').should((text1) => {
            expect(text1).to.contain('************4242')
        })
    }

    static verifyInvoicesReceipts() {
        cy.get('[id="transaction-data"] tr').eq(1).then(() => {
            const todaysDate = Cypress.moment().format('DD-MMM-YYYY')
            cy.get('td').eq(1).should('have.text', todaysDate)
            cy.get('td').eq(4).should('have.text', 'Credit Card')
            cy.get('td').eq(6).should('have.text', 'Paid in full')
        })
    }
}
export default accountBalanceView
