@plgUser
Feature: for PLG user, Contact us button, on each view of limited modules that can be upgraded, opens in new tab

    Scenario Outline: for PLG user verify Contact us button on Touches view
        And I read the file with the "<fileName>" and "<key>"
        Given I open up the core page
        And I enter the username in the username field on the login page
        And I enter the password in the password field on the login page
        And I click on the submit button of second button
        And I close the popup of the advertise in our application
        And I click on Touches option
        Then I verify the new tab for Contact Us form

    # Scenario Outline: for PLG user verify Contact us button on Inventory view
        And I click on Inventory option
        Then I verify the new tab for Contact Us form

    # Scenario Outline: for PLG user verify Contact us button on Templates view
        And I click on Templates option
        Then I verify the new tab for Contact Us form

    # Scenario Outline: for PLG user verify Contact us button on Analytics view
        And I click on Analytics option
        Then I verify the new tab for Contact Us form

    # Scenario Outline: for PLG user verify Contact us button on Teams view
        And I click on Teams option
        Then I verify the new tab for Contact Us form
        Examples:
            | fileName | key     |
            | profiles | plgUser |
