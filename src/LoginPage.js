export default class LoginPage {
    constructor() {
        this.emailInputField = '#input-email';
        this.passwordInputField = '#input-password';
        this.checkBox = '.custom-checkbox';
        this.submitButton = '.appearance-filled';
    }

    enterLoginData(email, password) {
        cy.get(this.emailInputField).type(email)
        cy.get(this.passwordInputField).type(password)
        cy.get(this.checkBox).click()
    }

    submitLoginButton() {
        cy.get(this.submitButton).click() 
    }
}