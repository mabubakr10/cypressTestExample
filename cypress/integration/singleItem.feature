@feature-tag
Feature: Testing Iframes with single Item

  Scenario Outline: Verify single item touch with iframes
    And I read the file with the "<fileName>" and "<key>"
    Given I open login page
    And I fill username with of sendoso applicaton "<username>"
    And I fill password with of sendoso applicaton "<password>"
    And I click on the submit button of second button
    And I close pop up button
      #And I close up the pop up button
    Examples:
      |username                   |password |fileName|key        |fileName|
      |afshan.shakoor@sendoso.com|Sendoso@123???|profiles|singleItem|profiles|