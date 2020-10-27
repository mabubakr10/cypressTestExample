@plgUser
Feature: PLG Contact us button on Send All touches view

    Scenario Outline: for PLG user verify Contact us button on Send All touches view opens in new tab
        And I read the file with the "<fileName>" and "<key>"
        Given I open up the core page
        And I enter the username in the username field on the login page
        And I enter the password in the password field on the login page
        And I click on the submit button of second button
        Then I verify the new tab for Contact Us form
        And I click on the eGifts tab to change view to eGifts
        Then I verify the new tab for Contact Us form
        And I click on the Sendoso Direct tab to change view to Sendoso Direct touches
        Then I verify the new tab for Contact Us form

        Examples:
            | fileName | key     |
            | profiles | plgUser |