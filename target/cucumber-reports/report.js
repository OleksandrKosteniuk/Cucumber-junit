$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:com/cucumber/junit/features/CheckoutSummaryCalculation.feature");
formatter.feature({
  "name": "As a user, I want to get the ability to add Product line-item to the Basket and get Order Summary calculation on the Checkout page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Checkout summary component automatically calculate Order total amount on the Checkout page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@homework"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The User opens Product product details page with ID\u003d9780007419494",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.openCucumberWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User clicks on the Add to basket button on the Product details page",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.clickOnTheAddToBasketButtonOnPDP()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User click on the Basket button in the pop-up on the Product Detail page",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.clickOnTheBasketCheckoutButtonInThePopUpOnPDP()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User clicks on the Checkout button on the Shopping Cart page",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.clickOnTheCheckoutButtonOnTheShoppingCartPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//*[@class\u003d\u0027checkout-btn btn optimizely-control\u0027])[1]\"}\n  (Session info: chrome\u003d91.0.4472.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EPUAKYIW065C\u0027, ip: \u0027192.168.0.112\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\OLEKSA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63101}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4d9e6c8c368ac0f7a170b9955a6bcc4e\n*** Element info: {Using\u003dxpath, value\u003d(//*[@class\u003d\u0027checkout-btn btn optimizely-control\u0027])[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.cucumber.junit.pages.BasePage.findElement(BasePage.java:16)\r\n\tat com.cucumber.junit.pages.ShoppingCartPage.clickOnTheCheckoutButton(ShoppingCartPage.java:17)\r\n\tat com.cucumber.junit.steps.OrderSummaryCalculationSteps.clickOnTheCheckoutButtonOnTheShoppingCartPage(OrderSummaryCalculationSteps.java:37)\r\n\tat ✽.The User clicks on the Checkout button on the Shopping Cart page(classpath:com/cucumber/junit/features/CheckoutSummaryCalculation.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The User fills in Email address input field",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.fillInEmailAddressInputField()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User fills in Email address input field",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.fillInEmailAddressInputField()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User clicks on Enter address manually button on the Checkout page",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.clickOnTheEnterAddressManuallyButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User fills in Address line 1 input field on the Checkout page",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.fillInAddressLineInputField()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User fills in Town input field on the Checkout page",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.fillInTownCityInputField()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User fills in Postcode input field on the Checkout page",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.fillInPostcodeZipInputField()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User clicks on the Continue to payment button on the Checkout page",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.clickOnTheContinueToPaymentButtonOnTheCheckoutPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Checkout summary component is automatically calculated Order total amount on the Checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.checkoutSummaryComponentIsCalculated()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("https://www.bookdepository.com/Hidden-Child-Camilla-L%C3%A4ckberg/9780007419494");
formatter.embedding("image/png", "embedded0.png", "Checkout summary component automatically calculate Order total amount on the Checkout page");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});