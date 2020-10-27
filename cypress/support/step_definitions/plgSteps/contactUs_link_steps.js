import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import contactUsLink from '../steps/plg/contactUs/contactUsLink'

Before(() => {
    cy.viewport(1920, 1080)
});

Given('I click on the Contact Us', () => {
    contactUsLink.clickContactUsButton()
})

And('I click on the eGifts tab to change view to eGifts', () => {
    contactUsLink.clickeGiftsTab()
})

And('I click on the Sendoso Direct tab to change view to Sendoso Direct touches', () => {
    contactUsLink.clickSendosoDirectTab()
})

And('I click on the Collections tab to change view to collection of touches', () => {
    contactUsLink.clickCollectionsTab()
})

And('I click on the Amazon Gift Card', () => {
    contactUsLink.selectGiftCard('Amazon Gift Card')
})

And('I select In bulk to multiple email addresses option from the drop down', () => {
    contactUsLink.selectHowToSend('In bulk to multiple email addresses')
})

Then('I verify the new tab for Contact Us form', () => {
contactUsLink.verifyContactUsNewTab()
})