class AddEmp {
  visit() {
    cy.visit("/");
    cy.wait(5000);
  }

  login(username, password) {
    cy.get("input[name='username']").type(username);
    cy.get("input[name='password']").type(password);
    cy.get("button[type='submit']").click();
    cy.wait(3000);
  }

  AddEmp() {
    cy.contains("span", "PIM").click();
    cy.contains("a", "Add Employee", { timeout: 10000 })
      .should("be.visible")
      .click();
    cy.url().should("include", "/pim/addEmployee");
  }

  EmpDetails(firstName, middleName, lastName, employee_id) {
  cy.get("input[name='firstName']").clear().type(firstName);
  cy.get("input[name='middleName']").clear().type(middleName);
  cy.get("input[name='lastName']").clear().type(lastName);
  cy.get('.oxd-input.oxd-input--active').eq(3).type(employee_id);
  
  }

  ImgUpload(fileName) {
    cy.get("input[type='file']").selectFile(`cypress/fixtures/${fileName}`, { force: true });
  }

  

  clickSave() {
    cy.contains("button", "Save").click();
  }

  verifyEmp() {
  cy.location("pathname", { timeout: 10000 }).should("include", "/viewPersonalDetails");
  cy.contains("h6", "Personal Details", { timeout: 10000 }).should("be.visible");
  }

  ///////
  EmptyField() {
    cy.contains("button", "Save").click();
  }

  verifyValidation() {
    cy.get(".oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message")
    .should("be.visible")
    .and("contain.text", "Required");
  }

  unSupportPic(fileName) {
    cy.get("input[type='file']")
    .selectFile(`cypress/fixtures/${fileName}`, { force: true });
}

  verifyError() {
    cy.contains("File type not allowed")
    .should("be.visible");

  }


}

export default AddEmp;