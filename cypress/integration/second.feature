@second
Feature: Login to Application for the second

   Scenario Outline: Scenario Outline name: Login to the sendoso application with the valid credentials for the second
      Given I open login page
      And I fill username with of sendoso applicaton "<username>"
      And I click on the submit button of second button
       Examples:
        |username           |
        |manager@sendoso.com|
     