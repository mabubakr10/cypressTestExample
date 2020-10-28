import LoginPage from "./loginPage";

const createTouchButton = '//a[contains(text(),"Create New Touch")]',
nextButton="//div[@class='col-lg-2 ml-auto']//input[@name='commit']",
touchName="#touch_name",
displaynameField="#touch_name_for_sender",
finishButton="//input[@value = 'Finish']",
sendButton="//a[@href='/send']",
sendToDropDown="#send_option",
recipientEmailField="#send_email",
recipientName="#send_name",
messageField='#swal2-content',
okayButton="//button[@type='button'][contains(text(),'OK')]",
mailingAddressField="#street_number";
let splittedUrl;

class touchPage
{

    static clickTab(tabName)
    {
     let tabToClick="//span[text()='"+tabName+"']";
     cy.xpath(tabToClick).click();
     console.log("Entered"+tabName+" inside username  field")
    }

    static clickCreateNewTouch()
    {
        cy.xpath(createTouchButton).click();
        cy.log("Clicked on Create new touch button")
    }

    static selectTouchtype(touchType)
    {
        let tochtape=LoginPage.data.touch;
        let touchName="//div[@id=\"collapse-inventoried-sends-gift\"]//span[contains(text(),'"+LoginPage.data.touch+"')]"
        cy.xpath(touchName).click();
        cy.log("Selected "+touchType+" touch type");

    }

    static clickNextbutton()
    {
        cy.xpath(nextButton).click();
        cy.log("Clicked on next button of create touch")
    }

    static selectProduct()
    {
        let product="//div[@title='"+LoginPage.data.product+"']";
        cy.xpath(product).click();
    }

    static selectChargeCostTo() {
        let chargeCostToDropDown="#touch_funding_source_based";
        cy.get(chargeCostToDropDown).select(LoginPage.data.chargeCostTo);
        cy.log("Selected charge cost to "+LoginPage.data.chargeCostTo)
    }

    static selectFundingSource(fundingSource)
    {
        let fundingSourcetoSelect="#touch_funding_source_id";
        cy.get(fundingSourcetoSelect).select(LoginPage.data.FS);
        cy.log("Selected funding source is "+LoginPage.data.FS)
    }

    static editTouchName()
    {
        cy.get(touchName).clear();
        cy.url().then(url => {
        splittedUrl=(url.split('/')[4])
        cy.get(touchName).type(LoginPage.data.TouchName+" "+splittedUrl);
        cy.log(LoginPage.data.TouchName+" enterted inside touch name field")
        });

    }

    static enterDisplayName() {
     cy.get(displaynameField).clear();
     cy.get(displaynameField).type(LoginPage.data.TouchName+" "+splittedUrl);
     cy.log(LoginPage.data.TouchName+" enterted inside display name field")
    }

    static clickFinishButton() {
    cy.xpath(finishButton).click();
    cy.log("Clicked on finsish button")
    }

    static clickSendButton()
    {
    cy.xpath(sendButton).click();
    cy.log("Clicked on Send button");
    }

    static selectTouch() {
    let touchToSelect="//strong[contains(text(),'"+LoginPage.data.TouchName+" "+splittedUrl+"')]/parent::center/parent::div/label"
    cy.xpath(touchToSelect).click();
    }

    static selectoptionToSendTouchTo()
    {
        cy.get(sendToDropDown).select(LoginPage.data.SendTouchTo);
        cy.log("Selected "+LoginPage.data.SendTouchTo)

    }

    static enterCustomMessage() {
        const frameToSwitch="#send_custom_message_ifr";
        cy.switchToIframe(frameToSwitch).clear().type(LoginPage.data.customMessage);
        cy.log("Entered custom message");

    }

    static enterMailingAddress() {
        cy.get(mailingAddressField).clear();
        cy.get(mailingAddressField).type(LoginPage.data.mailingAddress);
        cy.wait(2000);
        cy.get(mailingAddressField).type('{downarrow}{enter}')
    }

    static enterRecipientEmail() {
        cy.get(recipientEmailField).type(LoginPage.data.recipeintEmail);
        cy.log("Entered "+LoginPage.data.recipeintEmail+" inside recipient email field")
    }

    static enterFullName() {
       cy.get(recipientName).clear().type(LoginPage.data.RecipientFullName);
       cy.log("Entered "+LoginPage.data.RecipientFullName+" inside name field")

    }

    static verifySaleForceTrackingPage()
    {
        cy.wait(3500);
        cy.xpath("//h2[contains(text(),'Salesforce Tracking:')]").should('be.visible');
    }

    static sendTouch(buttonText) {
     const buttonToClick="//button[text()='"+buttonText+"']";
     cy.xpath(buttonToClick).click();
     cy.log("Clicked on "+buttonText+ "on send screen");
    }

    static verifyActionPerformed()
    {
        cy.get(messageField).should('have.text',LoginPage.data.message);
        cy.log("Verified the success message displayed after sending touch is "+LoginPage.data.message);
    }
    static clickOkayButton()
    {
    cy.xpath(okayButton).click();
    cy.log("Clicked on okay button on popup")
    }
}
export default touchPage