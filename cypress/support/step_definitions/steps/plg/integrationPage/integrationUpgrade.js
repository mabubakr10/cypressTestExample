class integrationLinks {
    constructor() {
        this.dataSet = null
    }

    static verifyUpgrade() {

        cy.get('[class="integration-set-up"]').invoke('text').then((integrations) => {
            if (integrations == 'Salesforce') { }
            else {
                cy.get('[class="integration-set-up"]').contains('Upgrade').parents('div').should('have.class', 'icon icon-lock stl-mr-3')

            }
        })
    }
}
export default integrationLinks
