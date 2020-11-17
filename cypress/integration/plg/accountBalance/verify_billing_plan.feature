@plgUser
Feature: for PLG user, verify the Plan & Billing view
  Scenario Outline: verify the Plan & Billing view
    And I read the file with the "<fileName>" and "<key>"
    Given I open up the core page
    And I enter the username in the username field on the login page
    And I enter the password in the password field on the login page
    And I click on the submit button of second button
    And I am logged in as PLG user
    And I click on the Account Balance Module
    And I click on the Plan & Billing Tab
    And I verify the Plan name
    And I click on replace the credit card button
    And I add or replace the credit card info
    And I click the Add button to save info
    Then I verify the card is saved
    Examples:
      | fileName | key     |
      | profiles | plgUser |
