import LoginPage from "./loginPage";

class TouchCreation {

    static clickTouchCreate() {
        cy.xpath('//div[@class="touches_btn touch_create_btn"]//a').click()
    }

    static addAddress(){
        LoginPage.data.password;
    }

}

export default TouchCreation