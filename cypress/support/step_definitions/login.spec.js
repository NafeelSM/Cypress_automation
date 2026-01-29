import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor"; 
import LoginPage from "../../e2e/pageObjects/LoginPage";

const loginPage = new LoginPage();
let crd = null;

Before(() => { cy.fixture("credentials").then((data) => 
  { crd = data; }); });

Given("I open the OrangeHRM login page", () => 
  { loginPage.visit(); });

When("I login as the Admin with valid password", () => 
  { loginPage.login(crd.username, crd.password); });

Then("I should see the dashboard", () => 
  { loginPage.verifySuccessfulLogin(); });

When("I login as the Admin with invalid password", () => 
  { loginPage.login(crd.username, crd.invalidPassword); });

Then("I should see an error message", () => 
  { loginPage.verifyError(); });

//new scenario added..
When("I click login without entering username and password", () => 
  { loginPage.emptyLogin(); });

Then("I should see required validation messages", () => 
  { loginPage.verifyValidation(); });

When("I click Forgot your password link", () => 
  { loginPage.forgotPassword(); });

Then("I should redirect to reset password page", () => 
  { loginPage.verifyRedirectResetPassword(); });
