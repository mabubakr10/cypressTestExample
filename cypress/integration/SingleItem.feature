@SingleItem
Feature: Single Item Send by selecting from the sending menu

  Scenario Outline: Send a single-item touch
    And I read the file with the "<fileName>" and "<key>"
    Given I open login page
    And I fill username with of sendoso applicaton "<username>"
    And I fill password with of sendoso applicaton "<password>"
    And I click on the submit button of second button
    And I close up the pop up button after login
    Then I click on the Send button
    Then I click on the single item touch
    Then I select single send method of sending

    Examples:
      |username                            |password          |fileName|key        |
      |jaffar.lone+automation+1@sendoso.com|Ricochet_37_@_#_qe|profiles|phoneNumber|