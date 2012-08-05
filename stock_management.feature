Feature: Stock Management


  Scenario: all stock
    Given we have a warehouse full of stock:
      | Code   | Description         | Quantity |
      | CODE#1 | What Animals Say    | 100      |
      | CODE#2 | TDD For Programmers | 5        |
    When I visit the stock page
    Then I should see all the available stock
