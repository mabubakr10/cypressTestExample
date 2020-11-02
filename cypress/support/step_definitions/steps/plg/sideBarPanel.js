class sideBarOptions {
    constructor() {
        this.dataSet = null
    }

    static sendTouchButton() {
        cy.xpath('[class="stl-button button--light"]').click()
    }
    
    static accountBalanceTab() {
        cy.xpath('//span[text()="Account Balance"]').click()
    }

    static sendTrackerTab() {
        cy.xpath('//span[text()="Send Tracker"]').click()
    }

    static touchesTab() {
        cy.xpath('//span[text()="Touches"]').click()
    }

    static inventoryTab() {
        cy.xpath('//span[text()="Inventory"]').click()
    }

    static templatesTab() {
        cy.xpath('//span[text()="Templates"]').click()
    }

    static analyticsTab() {
        cy.xpath('//span[text()="Analytics"]').click()
    }

    static teamsTab() {
        cy.xpath('//span[text()="Teams"]').click()
    }
}
export default sideBarOptions