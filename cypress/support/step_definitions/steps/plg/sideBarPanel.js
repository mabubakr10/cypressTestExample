class sideBarOptions {
    constructor() {
        this.dataSet = null
    }

    static sendTouchButton() {
        cy.xpath('[class="stl-button button--light"]').click()
    }

<<<<<<< HEAD
    static selectModule(module) {
=======
    static selectModule(module)
    {
>>>>>>> 9e57cea... [PN-214] verify upgrade sign is displayed on locked integrations
        cy.xpath('//*[@class="stl-nav__list"]').contains(module).click()
    }

    static viewIntegrations() {
        cy.xpath('[class="stl-nav stl-nav--horizontal"] [href="/integrations"]').click()
    }
<<<<<<< HEAD

    static viewUserSettings() {
        cy.get('[class="stl-nav__link_icon stl-mr-0"] [class="icon-setting-fill"]').trigger('mouseover').then(() => {
            cy.get('[href="/users/edit"]').eq(0).click()
        })
    }
}
export default sideBarOptions
=======
}
export default sideBarOptions
>>>>>>> 9e57cea... [PN-214] verify upgrade sign is displayed on locked integrations
