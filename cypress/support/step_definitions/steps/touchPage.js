import LoginPage from "./loginPage";
const createTouchButton = '//a[contains(text(),"Create New Touch")]';
const nextButton="//div[@class='col-lg-2 ml-auto']//input[@name='commit']";
const touchName="#touch_name";
const displaynameField="#touch_name_for_sender",
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
    constructor()
    {
        this.dataSet = null
    }
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
        let touchName="//div[@id=\"collapse-inventoried-sends-gift\"]//span[contains(text(),'"+touchType+"')]"
        cy.xpath(touchName).click();
        cy.log("Selected "+touchType+" touch type");

    }

    static clickNextbutton()
    {
        cy.xpath(nextButton).click();
        cy.log("Clicked on next button of create touch")
    }

    static selectProduct(productToSelect)
    {
        let product="//div[@title='"+productToSelect+"']";
        cy.xpath(product).click();
    }

    static selectChargeCostTo(chargeCostTo) {
        let chargeCostToDropDown="#touch_funding_source_based";
        cy.get(chargeCostToDropDown).select(chargeCostTo);
        cy.log("Selected charge cost to "+chargeCostTo)
    }

    static selectFundingSource(fundingSource)
    {
        let fundingSourcetoSelect="#touch_funding_source_id";
        cy.get(fundingSourcetoSelect).select(fundingSource);
        cy.log("Selected funding source is "+fundingSource)
        // cy.SelectByText(fundingSourcetoSelect,fundingSource)
    }

    static editTouchName(touchname)
    {
        cy.get(touchName).clear();
        cy.url().then(url => {
        splittedUrl=(url.split('/')[4])
        cy.get(touchName).type(touchname+" "+splittedUrl);
        cy.log(touchname+" enterted inside touch name field")
        });

    }

    static enterDisplayName(displayname) {
     cy.get(displaynameField).clear();
     cy.get(displaynameField).type(displayname+" "+splittedUrl);
     cy.log(displayname+" enterted inside display name field")
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

    static selectTouch(touch) {
    let touchToSelect="//strong[contains(text(),'"+touch+" "+splittedUrl+"')]/parent::center/parent::div/label"
    cy.xpath(touchToSelect).click();
    }

    static selectoptionToSendTouchTo(sendtouchTo)
    {
        cy.get(sendToDropDown).select(sendtouchTo);
        cy.log("Selected "+sendtouchTo+"")

    }

    static enterCustomMessage(custommessage) {
        const frameToSwitch="#send_custom_message_ifr";
        cy.switchToIframe(frameToSwitch).clear().type(custommessage);
        cy.log("Entered custom message");

    }

    static enterMailingAddress(mailingAddress) {
        cy.get(mailingAddressField).clear();
        cy.get(mailingAddressField).type(mailingAddress);
        cy.wait(2000);
        cy.get(mailingAddressField).type('{downarrow}{enter}')
    }

    static enterRecipientEmail(recipientsEmail) {

        cy.get(recipientEmailField).type(recipientsEmail);
        cy.log("Entered "+recipientsEmail+" inside recipient email field")
    }

    static enterFullName(fullName) {
       cy.get(recipientName).clear().type(fullName);
       cy.log("Entered "+fullName+" inside name field")

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

    static verifyActionPerformed(message) {
        cy.get(messageField).should('have.text', message);
        cy.log("Verified the success message displayed after sending touch is "+message);
    }
    static clickOkayButton() {
    cy.xpath(okayButton).click();
    cy.log("Clicked on okay button on popup")
    }
}
export default touchPage