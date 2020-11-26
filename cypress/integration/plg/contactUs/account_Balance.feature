@plgUser
Feature: PLG Contact us button on Account Balance view

    Scenario Outline: for PLG user verify Contact us button on Account Balance view
        And I read the file with the "<fileName>" and "<key>"
        Given I open up the core page
        And I enter the username in the username field on the login page
        And I enter the password in the password field on the login page
        And I click on the submit button of second button
        And I click on Account Balance option
        Then I verify the new tab for Contact Us form
        And I click on log out button

        Examples:
            | fileName | key     |
            | profiles | plgUser |
