Feature: As a user, I want to get the ability to add Product line-item to the Basket and get Order Summary calculation on the Checkout page

  @homework
  Scenario: Checkout summary component automatically calculate Order total amount on the Checkout page
    Given The User opens Product product details page with ID=9780007419494
    And The User clicks on the Add to basket button on the Product details page
    And The User click on the Basket button in the pop-up on the Product Detail page
    And The User clicks on the Checkout button on the Shopping Cart page
    And The User fills in Email address input field
    And The User fills in Full name input field
    And The User clicks on Enter address manually button on the Checkout page
    And The User fills in Address line 1 input field on the Checkout page
    And The User fills in Town input field on the Checkout page
    And The User fills in Postcode input field on the Checkout page
    And The User clicks on the Continue to payment button on the Checkout page
    Then Checkout summary component is automatically calculated Order total amount on the Checkout page