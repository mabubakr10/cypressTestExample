@plgUser
Feature: for PLG user, verify the Activity Feed is a static page
  Scenario Outline: Verify Activity Feed is a static page
    And I read the file with the "<fileName>" and "<key>"
    Given I open up the core page
    And I enter the username in the username field on the login page
    And I enter the password in the password field on the login page
    And I click on the submit button of second button
    And I am logged in as PLG user
    And I click on the Account Balance Module
    And I click on the Activity Feed Tab
    Then I verify Activity Feed is a static page
    And I click on log out button
    
    Examples:
      | fileName | key     |
      | profiles | plgUser |
