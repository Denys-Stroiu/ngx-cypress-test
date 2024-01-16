export default class SmartTable {
  constructor() {
    this.addButton = '.ng2-smart-actions-title > .ng2-smart-action';
    this.idInputField = ':nth-child(2) > ng2-smart-table-cell > table-cell-edit-mode.ng-star-inserted > :nth-child(1) > table-cell-default-editor.ng-star-inserted > div > .ng-star-inserted > .form-control';
    this.firstNameInputField = ':nth-child(3) > ng2-smart-table-cell > table-cell-edit-mode.ng-star-inserted > :nth-child(1) > table-cell-default-editor.ng-star-inserted > div > .ng-star-inserted > .form-control';
    this.lastNameInputField = ':nth-child(4) > ng2-smart-table-cell > table-cell-edit-mode.ng-star-inserted > :nth-child(1) > table-cell-default-editor.ng-star-inserted > div > .ng-star-inserted > .form-control';
    this.userNameInputField = ':nth-child(5) > ng2-smart-table-cell > table-cell-edit-mode.ng-star-inserted > :nth-child(1) > table-cell-default-editor.ng-star-inserted > div > .ng-star-inserted > .form-control';
    this.emailInputField = ':nth-child(6) > ng2-smart-table-cell > table-cell-edit-mode.ng-star-inserted > :nth-child(1) > table-cell-default-editor.ng-star-inserted > div > .ng-star-inserted > .form-control';
    this.ageInputField = ':nth-child(7) > ng2-smart-table-cell > table-cell-edit-mode.ng-star-inserted > :nth-child(1) > table-cell-default-editor.ng-star-inserted > div > .ng-star-inserted > .form-control';
    this.chekmark = '.nb-checkmark';
    this.cancelIcon = '.nb-close';
    this.editButton = '.selected > .ng2-smart-actions > ng2-st-tbody-edit-delete > .ng2-smart-action-edit-edit > .nb-edit'
    this.idField = 'tbody > :nth-child(1) > :nth-child(2)';
    this.firstNameField = 'tbody > :nth-child(1) > :nth-child(3)';
    this.lastNameField = 'tbody > :nth-child(1) > :nth-child(4)';
    this.userNameField = 'tbody > :nth-child(1) > :nth-child(5)';
    this.emailField = 'tbody > :nth-child(1) > :nth-child(6)';
    this.ageField = 'tbody > :nth-child(1) > :nth-child(7)'
  }

  verifyUserInTheTable(id, firstName, lastName, userName, email, age) {
    cy.get(this.idField).should('have.text', id)
    cy.get(this.firstNameField).should('have.text',firstName)
    cy.get(this.lastNameField).should('have.text',lastName)
    cy.get(this.userNameField).should('have.text',userName)
    cy.get(this.emailField).should('have.text',email)
    cy.get(this.ageField).should('have.text', age) 
  }

  addUserData(id, firstName, lastName, userName, email, age) {
    cy.get(this.idInputField).type(id)
    cy.get(this.firstNameInputField).type(firstName)
    cy.get(this.lastNameInputField).type(lastName)
    cy.get(this.userNameInputField).type(userName)
    cy.get(this.emailInputField).type(email)
    cy.get(this.ageInputField).type(age)
  }

  updateUserData(idUpdate, firstNameUpdate, lastNameUpdate, userNameUpdate, emailUpdate, ageUpdate) {
    cy.get(this.idInputField).clear().type(idUpdate)
    cy.get(this.firstNameInputField).clear().type(firstNameUpdate)
    cy.get(this.lastNameInputField).clear().type(lastNameUpdate)
    cy.get(this.userNameInputField).clear().type(userNameUpdate)
    cy.get(this.emailInputField).clear().type(emailUpdate)
    cy.get(this.ageInputField).clear().type(ageUpdate)
  }

  clickCheckMarkButton() {
    cy.get(this.chekmark).click()
  }
}