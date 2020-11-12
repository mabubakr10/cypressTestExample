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
        cy.get('[class="swal2-confirm swal2-styled"]').click()
    }

    static clickUnsubscribeAllEmail() {
        cy.get('[id="email_subscription_unsubscribed_all"]').click()
    }

    static clickSaveEmailButton() {
        cy.get('[class="email_subscription_form"] [class="btn btn-primary"]').click()
    }

    static verifyEmailUnmarkedCheckboxes() {
        cy.get('[class="email_subscription_form"] label input').eq(1).then(($nav) => {
            for (const i = 0; i < $nav.size(); i++) {
                $nav[i].should('not.be.checked')
            }
        })
    }

    static verifyEmailMarkedCheckboxes() {
        cy.get('[class="email_subscription_form"] label input').eq(1).then(($nav) => {
            for (const i = 0; i < $nav.size(); i++) {
                $nav[i].should('be.checked')
            }
        })
    }

    static checkWeeklyReportEmail() {
        cy.get('input[id="email_subscription_set_weekly_summary"]').check().should('be.checked').and('have.text', 'Weekly Reports')
    }

    static checkReceivedTouchEmail() {
        cy.get('input[id="email_subscription_set_coffee_alerts"]').check().should('be.checked').and('have.text', 'Alerts when recipient receives eGifts/Note/Direct Mail/etc.')
    }

    static checkUnusedTouchEmail() {
        cy.get('input[id="email_subscription_unused_egift_alert"]').check().should('be.checked').and('have.text', 'Unused eGift Alerts.')
    }

    static checkShippedTouchEmail() {
        cy.get('input[id="email_subscription_set_gift_status_alerts"]').check().should('be.checked').and('have.text', 'Alerts when Gifts/Swag/Direct Mail/etc. are shipped with tracking code.')
    }


    static clickUnsubscribeAllSMS() {
        cy.get('input[id="sms_subscription_unsubscribed_all"]').check()
    }

    static clickSaveSmsButton() {
        cy.get('[class="sms_subscription_form"] [class="btn btn-primary"]').click()
    }

    static verifySmsUnmarkedCheckboxes() {
        cy.get('[class="sms_subscription_form"] label input').eq(1).then(($nav) => {
            for (const i = 0; i < $nav.size(); i++) {
                $nav[i].should('not.be.checked')
            }
        })
    }

    static verifySmsMarkedCheckboxes() {
        cy.get('[class="sms_subscription_form"] label input').eq(1).then(($nav) => {
            for (const i = 0; i < $nav.size(); i++) {
                $nav[i].should('be.checked')
            }
        })
    }

    static checkWeeklyReportSMS() {
        cy.get('input[id="sms_subscription_set_weekly_summary"]').check().should('be.checked').and('have.text', 'Weekly Reports')
    }

    static checkReceivedTouchSMS() {
        cy.get('input[id="sms_subscription_set_coffee_alerts"]').check().should('be.checked').and('have.text', 'Alerts when recipient receives eGifts/Note/Direct Mail/etc.')
    }

    static checkUnusedTouchSMS() {
        cy.get('input[id="sms_subscription_unused_egift_alert"]').check().should('be.checked').and('have.text', 'Unused eGift Alerts.')
    }

    static checkShippedTouchSMS() {
        cy.get('input[id="sms_subscription_set_gift_status_alerts"]').check().should('be.checked').and('have.text', 'Alerts when Gifts/Swag/Direct Mail/etc. are shipped with tracking code.')
    }
}
export default settingsMain
