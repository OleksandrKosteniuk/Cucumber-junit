package com.cucumber.junit.pages;

import com.cucumber.junit.driver.driver.DriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class ProductDetailsPage extends BasePage {
    private static final String CUCUMBER_URL = "https://www.bookdepository.com/Hidden-Child-Camilla-L%C3%A4ckberg/9780007419494";

    private static final By ADD_TO_BASKET_BUTTON_PATTERN = By.xpath("//*[@class='btn btn-primary add-to-basket']");

    private static final By BASKET_CHECKOUT_BUTTON_IN_THE_POPUP_PATTERN = By.xpath("//*[@class='btn btn-primary pull-right continue-to-basket string-to-localize link-to-localize']");

    public void openCucumberWebsite() {
        DriverManager.getDriver().get(CUCUMBER_URL);
    }
    
    public void clickOnTheAddToBasketButton(){
        findElement(ADD_TO_BASKET_BUTTON_PATTERN).click();
    }

    public void clickOnTheBasketCheckoutButton(){
        findElement(BASKET_CHECKOUT_BUTTON_IN_THE_POPUP_PATTERN).click();
    }
}
