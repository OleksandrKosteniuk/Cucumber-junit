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
  "name": "The User opens Product details page with ID\u003d9780007419494",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.openCucumberWebsite(int)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Could not convert arguments for step [^(?:The |)(?:Guest |User |Registered User |RememberedMe User )open(?:s|) Product details page with ID\u003d([\\d]+)$] defined at \u0027com.cucumber.junit.steps.OrderSummaryCalculationSteps.openCucumberWebsite(int)\u0027.\nThe details are in the stacktrace below.\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.couldNotConvertArguments(PickleStepDefinitionMatch.java:119)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:56)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:221)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: io.cucumber.cucumberexpressions.CucumberExpressionException: ParameterType {anonymous} failed to transform [9780007419494] to int\r\n\tat io.cucumber.cucumberexpressions.ParameterType.transform(ParameterType.java:237)\r\n\tat io.cucumber.cucumberexpressions.Argument.getValue(Argument.java:67)\r\n\tat io.cucumber.core.stepexpression.ExpressionArgument.getValue(ExpressionArgument.java:15)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:47)\r\n\t... 30 more\r\nCaused by: java.lang.NumberFormatException: For input string: \"9780007419494\"\r\n\tat java.base/java.lang.NumberFormatException.forInputString(NumberFormatException.java:68)\r\n\tat java.base/java.lang.Integer.parseInt(Integer.java:652)\r\n\tat java.base/java.lang.Integer.valueOf(Integer.java:957)\r\n\tat java.base/java.lang.Integer.decode(Integer.java:1442)\r\n\tat io.cucumber.cucumberexpressions.BuiltInParameterTransformer.transform(BuiltInParameterTransformer.java:50)\r\n\tat io.cucumber.cucumberexpressions.RegularExpression.lambda$match$0(RegularExpression.java:61)\r\n\tat io.cucumber.cucumberexpressions.ParameterType$TransformerAdaptor.transform(ParameterType.java:269)\r\n\tat io.cucumber.cucumberexpressions.ParameterType.transform(ParameterType.java:233)\r\n\t... 33 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The User clicks on the Add to basket button on the Product details page",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.clickOnTheAddToBasketButtonOnPDP()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User clicks on the Basket button in the pop-up on the Product Detail page",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.clickOnTheBasketCheckoutButtonInThePopUpOnPDP()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User clicks on the Checkout button on the Shopping Cart page",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.clickOnTheCheckoutButtonOnTheShoppingCartPage()"
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
  "name": "The User fills in Full name input field",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.fillInFullNameInputField()"
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
  "name": "Checkout summary component calculates Order total amount on the Checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.junit.steps.OrderSummaryCalculationSteps.checkoutSummaryComponentIsCalculated()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("data:,");
formatter.embedding("image/png", "embedded0.png", "Checkout summary component automatically calculate Order total amount on the Checkout page");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});