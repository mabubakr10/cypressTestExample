class integrationLinks {
    constructor() {
        this.dataSet = null
    }

    static verifyUpgrade() {
        cy.get('[class="integration-content"] h3').invoke('text').should((integrations) => {


            for (const i = 0; i < integrations.size(); i++) {
                if (integrations[i] != "Salesforce") {
                    cy.get('[class="integration-content"] h3')[i].parents().siblings('[class="icon icon-lock stl-mr-3"]').should('have.text', 'Upgrade')
                }

                else {
                    cy.log('Salesfoce integration: do not need to upgrade')
                }
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
