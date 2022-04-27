Feature: End to end ecommerce validation',


    Application regression
    @Regression

    Scenario: Ecommerce products delivery
    Given I open the page
    When I add the products to the cart
    And Validate the total of the prices
    Then I select the country, sumbit, and verify the success message

    @Smoke
    Scenario: Filling the form to shop
    Given I open the page
    When I fill the form details
    |Name | Gender |
    |sam  | Female |
    
    Then Validate the form's behaviour
    And I select the shop page

