@plgUser
Feature: for PLG user, verify the Activity Logs in Activity Feed after sending touch (flag on)
  Scenario Outline: Send eGift Touch and verify Activity Feed
    And I read the file with the "<fileName>" and "<key>"
    Given I open up the core page
    And I enter the username in the username field on the login page
    And I enter the password in the password field on the login page
    And I click on the submit button of second button
    And I am logged in as PLG user
    And I click the Send button
    And I select an eGift Touch
    And I select How to send the touch from drop down
    And I add details for the send touch to single email
    And I click the Send touch button after adding details
    And I click the Pay button on Send Summary view
    And I verify the eGift sent success message appears and click Okay
    And I click on the Account Balance Module
    And I click on the Activity Feed Tab
    Then I verify the todays date and touch was eGift item
    Examples:
      | fileName | key     |
      | profiles | plgUser |
