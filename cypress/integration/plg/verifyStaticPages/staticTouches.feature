@plgUser
Feature: Verify Touches Static Page

    Scenario Outline: For PLG user, verify the user is shown a static Touches page
        And I read the file with the "<fileName>" and "<key>"
        Given I open up the core page
        And I enter the username in the username field on the login page
        And I enter the password in the password field on the login page
        And I click on the submit button of second button
        And I am logged in as PLG user
        And I click on the Touches tab
        Then I verify the user is shown a Touches static page

        Examples:
            | fileName | key     |
            | profiles | plgUser |
