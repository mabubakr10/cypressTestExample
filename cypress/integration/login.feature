@feature-tag
Feature: Login to Application

   Scenario Outline: Login to the sendoso application with the valid credentials.
      And I read the file with the "<fileName>" and "<key>"
      Given I open login page
      And I fill username with of sendoso applicaton "<username>"
      And I click on the submit button of second button
      #And I close up the pop up button
    Examples:
        |username                   |password |fileName|key        |fileName|
        |omer.bakhtiar+5@sendoso.com|Omer@1989|profiles|phoneNumber|profiles|