@plgUser
Feature: PLG Contact us button on Send single touch in bulk
    Scenario Outline: for PLG user verify Contact us button on Send single touch in bulk to multiple email
        And I read the file with the "<fileName>" and "<key>"
        Given I open up the core page
        And I enter the username in the username field on the login page
        And I enter the password in the password field on the login page
        And I click on the submit button of second button
        And I click on the eGifts tab to change view to eGifts
        And I click on the Amazon Gift Card
        And I select In bulk to multiple email addresses option from the drop down
        Then I verify the new tab for Contact Us form
        Examples:
            | fileName | key     |
            | profiles | plgUser |
