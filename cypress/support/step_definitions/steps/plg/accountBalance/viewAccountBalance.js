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
}
export default accountBalanceView
