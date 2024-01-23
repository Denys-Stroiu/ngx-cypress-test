/// <reference types="cypress" />

describe('Registration form', () => {
    
    beforeEach(() => {
        cy.visit('/')
        cy.get('nb-layout-column nb-card').eq(0).click()
        cy.fixture('registrationForm').as('inputData')
    })

    it('An error message is displayed when invalid data is entered in the "Full name" field', () => {
        cy.visit('/auth/register', { failOnStatusCode: false }); 
        cy.get('@inputData').then(inputData => {
           cy.get('#input-name').type(`${inputData.fullNameInputField.notValidData}`).blur()
           cy.get('.caption').eq(0).should('contain.text', inputData.fullNameInputField.errorMessage)
        })
    })
    
    it('An error message is displayed when invalid data is entered in the "Email address" field', () => {
        cy.visit('/auth/register', { failOnStatusCode: false }); 
        cy.get('@inputData').then(inputData => {
           cy.get('#input-email').type(`${inputData.emailAddressInputField.notValidData[0]}`).blur()
           cy.get('.caption').eq(0).should('contain.text', inputData.emailAddressInputField.errorMessage)
        })
    })
    
    it('An error message is displayed when invalid data is entered in the "Password" field', () => {
        cy.visit('/auth/register', { failOnStatusCode: false }); 
        cy.get('@inputData').then(inputData => {
           cy.get('#input-password').type(`${inputData.passwordInputField.notValidData[0]}`).blur()
           cy.get('.caption').eq(0).should('contain.text', inputData.passwordInputField.errorMessage)
        })
    })
    
    it('An error message is displayed when invalid data is entered in the "Repeat password" field', () => {
        cy.visit('/auth/register', { failOnStatusCode: false }); 
        cy.get('@inputData').then(inputData => {
           cy.get('#input-password').type(`${inputData.passwordInputField.notValidData[0]}`).blur()
        })
        cy.get('#input-re-password').type('12').blur()
        cy.get('#input-re-password').should('have.class', 'status-danger')
    })
})