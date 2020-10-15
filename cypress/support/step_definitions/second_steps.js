import { Given, When, Then, And,Before } from 'cypress-cucumber-preprocessor/steps'
import seconPage from './steps/seconPage'
import LoginPage from './steps/seconPage'

And ('I click on the submit button of second button',()=>{
     seconPage.submit_page_second()
})
When(/^I close up the pop up button$/, function() {
     cy.get("[value='Close']").click()
     cy.switchToIframe(frameToSwitch).clear().type(val);

});