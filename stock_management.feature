Feature: Stock Management


  Scenario: all stock
    Given we have a warehouse full of stock:
      | Code   | Description         |
      | CODE#1 | What Animals Say    |
      | CODE#2 | TDD For Programmers |
    When I visit the stock page
    Then I should see all the available stock
