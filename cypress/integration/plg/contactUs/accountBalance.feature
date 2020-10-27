@plgUser
Feature: PLG Contact us button on Collection of touches view

    Scenario Outline: for PLG user verify Contact us button on Collection of touches view opens in new tab
        And I read the file with the "<fileName>" and "<key>"
        Given I open up the core page
        And I enter the username in the username field on the login page
        And I enter the password in the password field on the login page
        And I click on the submit button of second button
        And 
        Then 

        Examples:
            | fileName | key     |
            | profiles | plgUser |