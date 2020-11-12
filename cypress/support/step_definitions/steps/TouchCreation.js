class TouchCreation {

    static clickTouchCreate() {
        cy.xpath('//div[@class="touches_btn touch_create_btn"]//a').click()
    }

    static closePopupAdvertise() {
        cy.get('.wm-visual-design-canvas svg.wm-ignore-css-reset').click({timeout:2000, multiple: true ,force: true})
    }
}
export default TouchCreation
