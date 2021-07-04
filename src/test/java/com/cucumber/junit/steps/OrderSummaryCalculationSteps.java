package com.cucumber.junit.steps;

import com.cucumber.junit.pages.GuestCheckoutPage;
import com.cucumber.junit.pages.ProductDetailsPage;
import com.cucumber.junit.pages.ShoppingCartPage;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import static org.assertj.core.api.Assertions.assertThat;

import static org.junit.Assert.assertTrue;

public class OrderSummaryCalculationSteps {
    
    private ProductDetailsPage productDetailsPage = new ProductDetailsPage();
    
    private ShoppingCartPage shoppingCartPage = new ShoppingCartPage();
    
    private GuestCheckoutPage checkoutPage = new GuestCheckoutPage();
        
    @When("^(?:The |)(?:Guest |User |Registered User |RememberedMe User )open(?:s|) Product details page with ID=([\\d]+)$")
    public void openCucumberWebsite(int productID) {
        productDetailsPage.openCucumberWebsite();
    }

    @When("^(?:The |)(?:Guest |User |Registered User |RememberedMe User )click(?:s|) on the Add to basket button on the Product details page$")
    public void clickOnTheAddToBasketButtonOnPDP() {
        productDetailsPage.clickOnTheAddToBasketButton();
    }
    
    @When("^The (?:Guest |User |Registered User |RememberedMe User )click(?:s|) on the Basket button in the pop-up on the Product Detail page$")
    public void clickOnTheBasketCheckoutButtonInThePopUpOnPDP() {
        productDetailsPage.clickOnTheBasketCheckoutButton();
    }
    
    @When("^The (?:Guest |User |Registered User |RememberedMe User )click(?:s|) on the Checkout button on the Shopping Cart page$")
    public void clickOnTheCheckoutButtonOnTheShoppingCartPage() {
        shoppingCartPage.clickOnTheCheckoutButton();
    }
    
    @When("^The (?:Guest |User |Registered User |RememberedMe User )fill(?:s|) in Email address input field$")
    public void fillInEmailAddressInputField() {
        checkoutPage.fillInEmailAddressInputField();
    }

    @When("^The (?:Guest |User |Registered User |RememberedMe User )fill(?:s|) in Full name input field$")
    public void fillInFullNameInputField() {
        checkoutPage.fillInFullNameInputField();
    }

    @When("^The (?:Guest |User |Registered User |RememberedMe User )click(?:s|) on Enter address manually button on the Checkout page$")
    public void clickOnTheEnterAddressManuallyButton() {
        checkoutPage.clickOnTheEnterAddressManuallyButton();
    }

    @When("^The (?:Guest |User |Registered User |RememberedMe User )fill(?:s|) in Address line 1 input field on the Checkout page$")
    public void fillInAddressLineInputField() {
        checkoutPage.fillInAddressLineInputField();
    }

    @When("^The (?:Guest |User |Registered User |RememberedMe User )fill(?:s|) in Town input field on the Checkout page$")
    public void fillInTownCityInputField() {
        checkoutPage.fillInTownCityInputField();
    }

    @When("^The (?:Guest |User |Registered User |RememberedMe User )fill(?:s|) in Postcode input field on the Checkout page$")
    public void fillInPostcodeZipInputField() {
        checkoutPage.fillInPostcodeZipInputField();
    }

    @When("^The (?:Guest |User |Registered User |RememberedMe User )click(?:s|) on the Continue to payment button on the Checkout page$")
    public void clickOnTheContinueToPaymentButtonOnTheCheckoutPage() {
        checkoutPage.clickOnTheContinueToPaymentButton();
    }

    @Then("^Checkout summary component calculates Order total amount on the Checkout page$")
    public void checkoutSummaryComponentIsCalculated() {
        assertThat(checkoutPage.getSubtotal().equals(checkoutPage.getTotal()))
        .overridingErrorMessage("Sub-total is not equal to total")
        .isTrue();
    }
}
