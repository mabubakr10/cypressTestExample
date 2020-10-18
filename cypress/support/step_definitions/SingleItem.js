import { Given, When, Then, And,Before } from 'cypress-cucumber-preprocessor/steps'

Then(/^I click on the Send button$/, function () {
            cy.get('.main-nav > .stl-sidebar__header > .stl-mb-11 > .stl-button > .stl-nav__link_text').click()
});
Then(/^I click on the single item touch$/, function () {
    cy.get('.row > #send_page_touches > .col-sm-4:nth-child(1) > .gift-wrap > .img-gift').click()
    cy.get('#send_page_touches > .col-sm-4 > .gift-wrap > .hide > #egift_60760_0').type('60760')
});
Given(/^I close up the pop up button after login$/, function () {
    cy.wait(2000)
    cy.get('#close > .modal-dialog > .modal-content > .modal-footer > .col-md-3').click()
});

Then(/^I signout of the application$/, function () {
    cy.wait(2000)
    cy.get('.stl-nav__list > .stl-position-relative > .stl-nav__link > .stl-nav__link_icon > .icon-setting').click()
    cy.get('.stl-nav__list > .stl-position-relative > .stl-dropdown__menu > .stl-dropdown__link:nth-child(2) > span').click()
});
