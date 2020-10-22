@feature-tag
Feature: Testing Iframes with single Item

  Scenario Outline: Verify single item touch with iframes
    And I read the file with the "<fileName>" and "<key>"
    Given I open login page
    And I fill username with of sendoso applicaton "<username>"
    And I fill password with of sendoso applicaton "<password>"
    And I click on the submit button of second button
    And I close pop up button
    And I click on "<tab>" Tab
    And I click on create New Touch button
    And I select "<Touch>" touch under Inventoried Sends at index
    Then I click on the next step of the create touch
    Then I select "<product>" product from existing items
    Then I click on the next step of the create touch
    Then I select charge cost to "<chargeCostTo>"
    Then I select "<FundingSource>" funding source to associate touch
    Then I edit up the touchName "<TouchName>" appearing at the page of enter touch details
    Then I enter the display name "<TouchName>" for sender
    Then I click on the next step of the create touch
    Then I verify that user is on the sales force tracking page
    Then I click on the next step of the create touch
    Then I click on the Finish button appearing on add touch to group page
    Then I click on Send button
    Then I select "<TouchName>" touch
    Then I select the "<SendTouchTo>"option to send touch to
    Then I enter "<customMessage>" custom message for touch
    Then I enter "<mailingAddress>" Mailing Address
    Then I Enter "<recipeintEmail>" Recipients Email
    Then I Enter "<RecipientFullName>"Recipients Full
    Then I click on "<ButtonText>" button on screen
    Then I verify action has been performed with message "<message>"
    Then I click on okay button

    Examples:
      |username                  |password      |fileName|key       |fileName |tab    |Touch       |product       |chargeCostTo  |TouchName|FundingSource       |SendTouchTo               |customMessage                               |mailingAddress|recipeintEmail            |RecipientFullName|ButtonText |message|
      |afshan.shakoor@sendoso.com|Sendoso@123???|profiles|singleItem|profiles |Touches|Single Items|CypressProduct|Funding Source|touchName|QuotingCalculator FS|To a single person/company|This is automation testing with cypress tool|247 East      |afshan.shakoor@sendoso.com|Afshan Shakoor    |Send      |Your item(s) are processing! You'll get an email with tracking info when your package is shipped and delivered. You can get real-time updates at Sendoso.com/analytics|