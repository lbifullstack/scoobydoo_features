Feature: we have smoke
  In order to make sure out application is functional
  As a developer
  I want run this acceptance test

  Scenario: we have smoke
    Given our application is running
    When i access the application status
    Then i should get back a valid response
