@FP1046
Feature: Single Item Send by selecting from the sending menu
  Scenario Outline: Send a single-item touch
    And I read the file with the "<filepath>" and "<key>"
    Given I open up the core page
    And I fill username with of sendoso applicaton "<username>"
    And I fill password with of sendoso applicaton "<password>"
    And I click on the submit button of second button
    And I close the cameo pop up
    And I close up the pop up button after login
    Then I click on the Send button
    Then I click on the single item touch
    Then I select single send method of sending
    Then I add the Recipient Name
    Then I add mailing address
    Then I add the Suite
    Then I add the City
    Then I add the State
    Then I add the Zip
    Then I add the country
    Then I click on the Send button to send the touch
    Then I click on the OK button
    Then I signout of the application

    Examples:
      |username                            |password          |filepath                      |key        |
      |jaffar.lone+automation+1@sendoso.com|Ricochet_37_@_#_qe|cypress/fixtures/profiles.json|SingleItem |