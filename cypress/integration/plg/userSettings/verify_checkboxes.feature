@plgUser
Feature: Verify the checkbox functionality is working correctly in user settings

    Scenario Outline: for PLG user verify the Email checkbox functionality is working correctly in user settings
        And I read the file with the "<fileName>" and "<key>"
        Given I open up the core page
        And I enter the username in the username field on the login page
        And I enter the password in the password field on the login page
        And I click on the submit button of second button
        And I close the popup of the advertise in our application
        And I click the User Settings option
        And I click the Notification tab
        And I click the unsubscribe from all checkbox under Email section
        And I click save for Email settings
        And I click OK to success message
        And I click the Notification tab
        And I verify email checkboxes are all unmarked
        And I click the weekly reports checkbox via email
        And I click the Alerts when received checkbox via email
        And I click the Unused eGift Alerts checkbox via email
        And I click Alerts when shipped checkbox via email
        And I click save for Email settings
        And I click OK to success message
        And I click the Notification tab
        Then I verify Email checkboxes are all marked

    Scenario Outline: for PLG user verify the SMS checkbox functionality is working correctly in user settings
        And I click the unsubscribe from all checkbox under SMS section
        And I click save for SMS settings
        And I click OK to success message
        And I click the Notification tab
        And I verify SMS checkboxes are all unmarked
        And I click the weekly reports checkbox via SMS
        And I click the Alerts when received checkbox via SMS
        And I click the Unused eGift Alerts checkbox via SMS
        And I click Alerts when shipped checkbox via SMS
        And I click save for SMS settings
        And I click OK to success message
        And I click the Notification tab
        Then I verify SMS checkboxes are all marked

    Scenario Outline: for PLG user verify the In App checkbox functionality is working correctly in user settings
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
