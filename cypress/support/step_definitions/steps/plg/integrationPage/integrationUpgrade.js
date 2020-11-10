class integrationLinks {
    constructor() {
        this.dataSet = null
    }

    static verifyUpgrade(integration) {
        cy.get('[class="integration-set-up"]').contains(integration).then(($btn) => {

            if (integration != 'Salesforce') {
                $btn.should('have.class', 'icon icon-lock stl-mr-3')
            }
            else {
                $btn.should('not.have.class', 'icon icon-lock stl-mr-3')
            }
        })
    }

    static verifyContactUsNewTab() {
        cy.get('[href="https://sendoso.com/beta-feedback/"]').should('have.attr', 'target', '_blank')
    }

    static selectGiftCard(input) {
        cy.get('[class="stl-grid-row"]' + 'img[alt=' + input + ']').click()
    }

    static selectHowToSend(input) {
        cy.get('[name="send_option"]').select(input).should('have.value', '6')
    }
}
export default integrationLinks
