@plgUser
Feature: Verify the 'Upgrade' is displayed against all locked integrations on the Integrations page.

    Scenario Outline: for PLG user verify 'Upgrade' is only displayed on locked integrations
        And I read the file with the "<fileName>" and "<key>"
        Given I open up the core page
        And I enter the username in the username field on the login page
        And I enter the password in the password field on the login page
        And I click on the submit button of second button
        And I click on the integrations option
        Then I verify the upgrade sign is present on all locked integrations
        Examples:
            | fileName | key     |
            | profiles | plgUser |
