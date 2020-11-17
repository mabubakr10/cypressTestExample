const numberCC = '4242424242424242'
const expiryCC = '1224'
const cvcCC = '456'
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
        cy.get('[class="stl-card__content"] h3').invoke('text').should(text1 => {
            expect(text1.trim()).to.equal('Sendoso for Individuals')
        })

    }

    static addReplaceCreditCardOption() {
        cy.get('[class="position stl-text-secondary-0"] div').click()
    }

    static addReplaceCreditCardForm() {
        cy.get('[class="stl-position-relative"] input').eq(0).type(numberCC)
        cy.get('input[placeholder="09/24"]').type(expiryCC)
        cy.get('[class="stl-position-relative"] input').eq(1).type(cvcCC)
    }

    static addReplaceCCButtonAdd() {
        cy.get('[class="stl-button stl-button--primary"]').click()
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

        const todaysDate = Cypress.moment().tz('America/New_York').format('DD-MMM-YYYY')
        cy.get('[class="stl-infinit_scroll__body"] [id="transaction-data"] tr td').eq(1).invoke('text').should((text1) => {
            expect(text1).to.contain(todaysDate)
        })
        cy.get('[class="stl-infinit_scroll__body"] [id="transaction-data"] tr td').eq(4).invoke('text').should((text1) => {
            expect(text1).to.contain('Credit Card')
        })
        cy.get('[class="stl-infinit_scroll__body"] [id="transaction-data"] tr td').eq(6).invoke('text').should((text1) => {
            expect(text1).to.contain('Paid in full')
        })
    }
}
export default accountBalanceView
