@feature-tag
Feature: Login to Application for the reading file

  Scenario Outline: Login to the sendoso application with the valid credentials of reading file
    And I read the file with the "<fileName>" and "<key>"
      #And I close up the pop up button
    Examples:
      |username                   |password |fileName|key    |
      |omer.bakhtiar+5@sendoso.com|Omer@1989|profiles|testing|