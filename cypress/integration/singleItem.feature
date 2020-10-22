@feature-tag
Feature: Testing Iframes with single Item

  Scenario Outline: Verify single item touch with iframes
    And I read the file with the "<filepath>" and "<key>"
    Given I open login page
    And I fill username with of sendoso applicaton
    And I fill password with of sendoso applicaton
    And I click on the submit button of second button
    And I close the popup of the advertise in our application
    And I close pop up button
    And I click on "<tab>" Tab
    And I click on create New Touch button
    And I select touch under Inventoried Sends at index
    Then I click on the next step of the create touch
    Then I select product from existing items
    Then I click on the next step of the create touch
    Then I select charge cost to"
    Then I select funding source to associate touch
    Then I edit up the touchName appearing at the page of enter touch details
    Then I enter the display name for sender
    Then I click on the next step of the create touch
    Then I verify that user is on the sales force tracking page
    Then I click on the next step of the create touch
    Then I click on the Finish button appearing on add touch to group page
    Then I click on Send button
    Then I select touch
    Then I select the option to send touch to
    Then I enter custom message for touch
    Then I enter Mailing Address
    Then I Enter Recipients Email
    Then I Enter Recipients Full
    Then I click on "<ButtonText>" button on screen
    Then I verify action has been performed with message

    Examples:
      |filepath                           |key        |tab    |ButtonText |
      |cypress/fixtures/touchCreation.json|createtouch|Touches|Send       |