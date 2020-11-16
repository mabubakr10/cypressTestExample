@plgUser
Feature: for PLG user, verify the Upload Bulk CSV view
  Scenario Outline: Send Sendoso Direct Touch and verify the Upload Bulk CSV view
    And I read the file with the "<fileName>" and "<key>"
    Given I open up the core page
    And I enter the username in the username field on the login page
    And I enter the password in the password field on the login page
    And I click on the submit button of second button
    And I am logged in as PLG user
    And I click the Send button
    And I click the Sendoso Direct Main tab
    And I select a Sendoso Direct Touch
    And I select How to send the Sendoso Direct from drop down
    Then I verify the user is shown an Unlock bulk sending static page
    Examples:
      | fileName | key     |
      | profiles | plgUser |
