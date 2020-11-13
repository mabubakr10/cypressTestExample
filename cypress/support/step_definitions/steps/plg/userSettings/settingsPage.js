class settingsMain {
    constructor() {
        this.dataSet = null
    }

    static clickNotificationTab() {
        cy.get('[href="#email"]').click()
    }

    static clickSendSummaryCheckbox() {
        cy.get('[id="in_app_setting_show_send_summary_modal"]').click()
    }

    static clickSaveSendSummaryCheckbox() {
        cy.get('[id="edit_in_app_setting_11"] [class="btn btn-primary"]').click()
    }

    static clickOKSuccess() {
        cy.get('[id="swal2-title"]').should('have.text', 'Good job!')
        cy. get('[class="swal2-confirm swal2-styled"]').click()
    }
}
export default settingsMain
