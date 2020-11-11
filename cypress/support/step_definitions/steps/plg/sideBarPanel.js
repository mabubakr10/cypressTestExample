class sideBarOptions {
    constructor() {
        this.dataSet = null
    }

    static sendTouchButton() {
        cy.xpath('[class="stl-button button--light"]').click()
    }

    static selectModule(module) {
        cy.xpath('//*[@class="stl-nav__list"]').contains(module).click()
    }

    static viewIntegrations() {
        cy.xpath('[class="stl-nav stl-nav--horizontal"] [href="/integrations"]').click()
    }

    static viewUserSettings() {
        cy.get('[class="stl-nav__link_icon stl-mr-0"] [class="icon-setting-fill"]').trigger('mouseover').then(() => {
            cy.get('[href="/users/edit"]').eq(0).click()
        })
    }
}
export default sideBarOptions
