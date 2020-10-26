@api-testing
Feature: Touches API automation

#  Scenario: Using a valid Auth0 token and fetching all touches of a user
#    Given I generate auth0 token
#    Then I hit the get all touches endpoint and verify its response


  Scenario: Sending a touch via send API
    Given I generate auth0 token
    Then I send a touch and verify response

