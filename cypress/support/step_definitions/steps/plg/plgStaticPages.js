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
        cy.get(staticHeading).invoke('text').should((success) => {
    
            expect(success).to.include('Execute campaigns seamlessly with Templates')
        })
    }

    static verifyStaticTeams() {
        cy.get(staticHeading).invoke('text').should((success) => {
    
            expect(success).to.include('Enterprise grade controls for teams')
        })
    }

    static verifyStaticAnalytics() {
        cy.get(staticHeading).invoke('text').should((success) => {
    
            expect(success).to.include('Detailed insights into your team’s Sendoso usage')
        })
    }

    static verifyStaticInventory() {
        cy.get(staticHeading).invoke('text').should((success) => {
    
            expect(success).to.include('Get access to Sendoso Warehouses')
        })
    }

    static verifyStaticTouches() {
        cy.get(staticHeading).invoke('text').should((success) => {
    
            expect(success).to.include('Unlock more send options')
        })
    }

    static verifyStaticActivityFeed() {
        cy.get('[class="icon icon-lock stl-text-size-12 stl-ml-2"]').should('be.visible')
    }

    static verifyUploadCsv() {
        cy.get('h2[class="stl-text-medium stl-mb-3"]').invoke('text').should((bulkCsv) => {
    
            expect(bulkCsv).to.include('Unlock bulk sending via CSV uploads')
        })
    }
}
export default plgStaticPages
