class sideBarOptions {
    constructor() {
        this.dataSet = null
    }

    static sendTouchButton() {
        cy.get(' [class="stl-button stl-button--primary stl-button--large"]').click()
    }

    static selectModule(module) {
        cy.xpath('//*[@class="stl-nav__list"]').contains(module).click()
    }

    static viewIntegrations() {
        cy.get('[class="stl-nav stl-nav--horizontal"] [href="/integrations"]').click()
    }

    static viewUserSettings() {
        cy.get('[class="stl-nav__link_icon stl-mr-0"] [class="icon-setting"]').trigger('mouseover').then(() => {
            cy.get('[href="/users/edit"]').eq(0).click()
        })
    }

    static logOutButton() {
        cy.get('[class="stl-nav__link_icon stl-mr-0"] [class="icon-setting"]').trigger('mouseover').then(() => {
            cy.get('[href="/user_logout"]').eq(0).click()
        })
    }
}
export default sideBarOptions
