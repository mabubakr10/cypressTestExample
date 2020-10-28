@api-testing
Feature: Touches API automation

  Scenario: Using a valid Auth0 token and fetching all touches of a user
    Given I generate auth0 token
    Then I hit the get all touches endpoint and verify its response

  Scenario: Sending an eGift touch via send API
    Given I generate auth0 token
    Then I send a touch "61383" and verify response

  Scenario: Sending a physical touch via send API
    Given I generate auth0 token
    Then I send a physical touch "61310" and verify response

