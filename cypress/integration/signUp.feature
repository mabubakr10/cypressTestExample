Feature: Write Cypress test for user Signup

  Scenario Outline: Write Cypress test for user Signup.
    And I read the file with the "<fileName>" and "<key>"
    Given I open up the integry page
    And I click on the Sign In button
    And I click on the Sign Up link
    And I enter email in the email field
    And I enter password in the password field
    And I click Continue button
    And I click Accept button
    Then I verify Dashboard Page
    And I click on the Integrations from side navigation
    And I click on profile button at the top
    And I click on sign out option in the dropdown

    Examples:
      | fileName | key     |
      | profiles | integry |
