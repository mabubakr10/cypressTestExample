class sideBarOptions {
    constructor() {
        this.dataSet = null
    }

    static sendTouchButton() {
        cy.xpath('[class="stl-button button--light"]').click()
    }

    static selectModule(module)
    {
        cy.xpath('//*[@class="stl-nav__list"]').contains(module).click()
    }

    static viewIntegrations() {
        cy.xpath('[class="stl-nav stl-nav--horizontal"] [href="/integrations"]').click()
    }
}
export default sideBarOptions
