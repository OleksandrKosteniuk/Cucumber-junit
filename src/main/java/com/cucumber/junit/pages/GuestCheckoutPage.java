package com.cucumber.junit.pages;

import com.cucumber.junit.driver.driver.DriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static java.lang.String.format;

public class GuestCheckoutPage extends BasePage{
    private static final String CUCUMBER_URL = "https://www.bookdepository.com/checkout/guest";
    
    private static final String USER_EMAIL_ADDRESS = "test@user.com";

    private static final String USER_FULL_NAME = "John Conor";
    
    private static final String USER_ADDRESS_LINE_1 = "24, Khreshchatyk street";
    
    private static final String USER_TOWN_CITY = "Kyiv";
    
    private static final String USER_POSTCODE_ZIP = "04210";
        
    private static final By EMAIL_INPUT_FIELD_PATTERN = By.xpath("//*[@name='emailAddress']");
    
    private static final By FULL_NAME_INPUT_FIELD_PATTEN = By.xpath("//*[@name='delivery-fullName']");
    
    private static final By ENTER_ADDRESS_MANUALLY_BUTTON_PATTERN = By.xpath("//*[@name='manualEntryButton']");

    private static final By ADDRESS_LINE_1_INPUT_FIELD_PATTEN = By.xpath("//*[@name='delivery-addressLine1']");
    
    private static final By TOWN_CITY_INPUT_FIELD_PATTEN = By.xpath("//*[@name='delivery-city']");

    private static final By POSTCODE_ZIP_INPUT_FIELD_PATTEN = By.xpath("//*[@name='delivery-postCode']");
    
    private static final By CONTINUE_TO_PAYMENT_BUTTON_BUTTON_PATTERN = By.xpath("//*[@id='hasSubmittedSameAddresses']");
    
    private static final By SUB_TOTAL_OF_THE_ORDER_SUMMARY_PATTERN = By.xpath("(//*[@class='text-right'])[3]");
    
    private static final By TOTAL_OF_THE_ORDER_SUMMARY_PATTERN = By.xpath("(//*[@class='text-right total-price'])[2]");
    
    public void openCucumberWebsite(){
        DriverManager.getDriver().get(CUCUMBER_URL);
    }
    
    public void fillInEmailAddressInputField(){
        findElement(EMAIL_INPUT_FIELD_PATTERN).sendKeys(USER_EMAIL_ADDRESS);
    }

    public void fillInFullNameInputField(){
        findElement(FULL_NAME_INPUT_FIELD_PATTEN).sendKeys(USER_FULL_NAME);
    }

    public void clickOnTheEnterAddressManuallyButton(){
        findElement(ENTER_ADDRESS_MANUALLY_BUTTON_PATTERN).click();
    }
    
    public void fillInAddressLineInputField(){
        findElement(ADDRESS_LINE_1_INPUT_FIELD_PATTEN).sendKeys(USER_ADDRESS_LINE_1);
    }

    public void fillInTownCityInputField(){
        findElement(TOWN_CITY_INPUT_FIELD_PATTEN).sendKeys(USER_TOWN_CITY);
    }

    public void fillInPostcodeZipInputField(){
        findElement(POSTCODE_ZIP_INPUT_FIELD_PATTEN).sendKeys(USER_POSTCODE_ZIP);
    }
    
    public void clickOnTheContinueToPaymentButton(){
        findElement(CONTINUE_TO_PAYMENT_BUTTON_BUTTON_PATTERN).click();
    }
    
    public String getSubtotal (){
        return findElement(SUB_TOTAL_OF_THE_ORDER_SUMMARY_PATTERN).getText();
    }
    
    public String getTotal (){
        return findElement(TOTAL_OF_THE_ORDER_SUMMARY_PATTERN).getText();
    }
}