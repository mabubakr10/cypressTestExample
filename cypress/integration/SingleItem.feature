@SingleItem
Feature: Single Item Send by selecting from the sending menu

  Scenario Outline: Login to the sendoso application with the valid credentials.
    And I read the file with the "<fileName>" and "<key>"
    Given I open login page
    And I fill username with of sendoso applicaton "<username>"
    And I fill password with of sendoso applicaton "<password>"
    And I click on the submit button of second button
    And I close up the pop up button
    Examples:
      |username                            |password          |fileName|key        |fileName|
      |jaffar.lone+automation+1@sendoso.com|Ricochet_37_@_#_qe|profiles|phoneNumber|profiles|