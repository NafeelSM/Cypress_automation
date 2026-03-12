import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AddEmp from "../../e2e/pageObjects/AddEmp";

const addEmp = new AddEmp();
let crd = null;

before(function () {
  cy.fixture("credentials").then((data) => {
    crd = data;
  });
});

Given("I login to the OrangeHRM application", () => {
  addEmp.visit();
  addEmp.login(crd.username, crd.password);
});

When("I navigate to the Add Employee page", () => {
  addEmp.AddEmp();
});

When("I enter the employee details", () => {
  addEmp.EmpDetails(
    crd.employee.firstName,
    crd.employee.middleName,
    crd.employee.lastName,
    crd.employee.employee_Id
  );
});


When("I select profile photo", () => {
  addEmp.ImgUpload(crd.employee.image);
});

When("I click save button on the page", () => {
  addEmp.clickSave();
});

Then("I should redirect to the EMP information", () => {
  addEmp.verifyEmp();
});

/////
When("I click save button without enter name", () => {
  addEmp.EmptyField();
});

Then("I should see a validation error message", ()=> {
  addEmp.verifyValidation();
});

When("I upload an unsupported file format as profile photo", () => {
  addEmp.unSupportPic(crd.employee.image2);
});

Then("I should see a file format error message", ()=> {
  addEmp.verifyError();
});
