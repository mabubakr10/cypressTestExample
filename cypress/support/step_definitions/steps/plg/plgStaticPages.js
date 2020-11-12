const staticHeading = 'h2[class="stl-text-medium stl-mb-0"]'

class plgStaticPages {
    constructor() {
        this.dataSet = null
    }
    
    static clickTemplatesTab() {
        cy.get('a[href="/user_custom_templates"]').click()
    }

    static clickTeamsTab() {
        cy.get('a[href="/teams/team"]').click()
    }

    static clickAnalyticsTab() {
        cy.get('a[href="/analytics"]').click()
    }

    static clickInventoryTab() {
        cy.get('a[href="/ship_notices/inventory"]').click()
    }

    static clickTouchesTab() {
        cy.get('a[href="/touches"]').click()
    }

    static verifyStaticTemplate() {
        cy.get(staticHeading).should('have.text', 'Execute campaigns seamlessly with Templates')
    }

    static verifyStaticTeams() {
        cy.get(staticHeading).should('have.text', 'Enterprise grade controls for teams')
    }

    static verifyStaticAnalytics() {
        cy.get(staticHeading).should('have.text', 'Detailed insights into your team’s Sendoso usage')
    }

    static verifyStaticInventory() {
        cy.get(staticHeading).should('have.text', 'Get access to Sendoso Warehouses')
    }

    static verifyStaticTouches() {
        cy.get(staticHeading).should('have.text', 'Unlock more send options')
    }

    static verifyStaticActivityFeed() {
        cy.get('[class="icon icon-lock stl-text-size-12 stl-ml-2"]').should('be.visible')
    }
}
export default plgStaticPages
