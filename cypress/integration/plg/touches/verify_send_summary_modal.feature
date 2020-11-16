@plgUser
Feature: for PLG user, verify the hide/show send summary checkbox works
    Scenario Outline: Send eGift Touch and hide send summary checkbox
        And I read the file with the "<fileName>" and "<key>"
        Given I open up the core page
        And I enter the username in the username field on the login page
        And I enter the password in the password field on the login page
        And I click on the submit button of second button
        And I am logged in as PLG user
        And I click the Send button
        And I click the eGift Tab
        And I select an eGift Touch
        And I select How to send the touch from drop down
        And I add details for the send touch to single email
        And I click the Send eGift touch button after adding details
        And I click the (Dont Show Summary) checkbox
        And I click the Pay button on Send Summary view
        Then I verify the sent success message appears and click Okay

    Scenario Outline: Send Sendoso Direct Touch and verify Send Summary remains hidden
        And I click the Send button
        And I click the Sendoso Direct Tab
        And I select a Sendoso Direct Touch
        And I select How to send the Sendoso Direct touch from drop down
        And I add details for the send Sendoso Direct touch to single person/company
        And I click the Send Sendoso Direct touch button after adding details
        Then I verify the sent success message appears and click Okay

    Scenario Outline: change from settings and send eGift touch to verify send summary appears
        And I click the User Settings option
        And I click the Notification tab
        And I click the Send Summary Checkbox
        And I click save for Send Summary change
        And I click OK to success message
        And I click the Send button
        And I click the eGift Tab
        And I select an eGift Touch
        And I select How to send the touch from drop down
        And I add details for the send touch to single email
        And I click the Send eGift touch button after adding details
        And I click the Pay button on Send Summary view
        Then I verify the sent success message appears and click Okay
        Examples:
            | fileName | key     |
            | profiles | plgUser |
