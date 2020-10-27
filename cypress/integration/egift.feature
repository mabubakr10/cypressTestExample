@egift
Feature: Login to Application

  Scenario Outline: Creating up the egift with coffee,sending it and verifying the anaylytics.
    And I read the file with the "<fileName>" and "<key>"
    Given I open up the integration page
    And I enter the username in the username field on the login page
    And I enter the password in the password field on the login page
    And I click on the submit button of second button
    And I close the popup of the advertise in our application
    And I click on the close popup of the application
    And I click on the create touch button
    Examples:
       |fileName|key      |
       |profiles|coffeeurl|