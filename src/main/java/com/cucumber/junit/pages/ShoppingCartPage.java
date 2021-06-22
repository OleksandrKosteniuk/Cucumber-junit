package com.cucumber.junit.pages;

import com.cucumber.junit.driver.driver.DriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class ShoppingCartPage extends BasePage {
    private static final String CUCUMBER_URL = "https://www.bookdepository.com/basket";

    private static final By CHECKOUT_BUTTON_PATTERN = By.xpath("(//*[@class='checkout-btn btn optimizely-control'])[1]");

    public void openCucumberWebsite() {
        DriverManager.getDriver().get(CUCUMBER_URL);
    }
    
    public void clickOnTheCheckoutButton(){
        findElement(CHECKOUT_BUTTON_PATTERN).click();
    }

}