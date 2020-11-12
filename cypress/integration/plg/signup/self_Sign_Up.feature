@signUpPlg
Feature: PLG Create user and login

  Scenario Outline: Creating the PLG user and then going through onbarding and login
    And I read the file with the "<fileName>" and "<key>"
    Given I open up the core page
    And I enter the username in the username field on the login page
    And I enter the password in the password field on the login page
    And I click on the submit button of second button
    And I click on the Generate Self-Serve SignUp Link
    And I click on the Create Self-Serve SignUp button
    And I enter the email id in the email field on the Generate Self-Serve SignUp page
    And I click on the Create button
    And I click on OK to close the pop up
    And I copy and redirect to the Sign Up token
    And I complete the sign up form
    And I login with the new PLG user
    And I fill the onboarding form
    And I add Credit Card Details
    Then I verify PLG user is redirected to core dashboard
    Examples:
      | fileName | key       |
      | profiles | signUpPlg |
