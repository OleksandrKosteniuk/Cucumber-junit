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
  "name": "The User clicks on the \"Add to basket\" button on the Product details page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The User clicks on the \"Basket/checkout\" button in the \"Item added to your basket\" pop-up on the Product details page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The User clicks on the \"Checkout\" button on the Shopping Cart page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The User fills in \"Email address\" input field",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The User fills in \"Full name\" input field",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The User click on \"Enter address manually\" button on the Checkout page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The User fills in \"Address line 1\" input field on the Checkout page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The User fills in \"Town/City\" input field on the Checkout page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The User fills in \"Postcode/ZIP\" input field on the Checkout page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The User clicks on the \"Continue to payment\" button on the Checkout page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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