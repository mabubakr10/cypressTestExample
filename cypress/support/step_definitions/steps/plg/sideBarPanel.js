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
}
export default sideBarOptions