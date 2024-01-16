/// <reference types="cypress" />
import SmartTable from "../../src/SmartTable"
import LoginPage from "../../src/LoginPage"

describe('Hillel-auto', () => {
    let addData = new SmartTable()
    let login = new LoginPage()

    let password = '#6Z-y7L$xw2v)S6Gr1'

    let id = '0'
    let firstName = 'Derick'
    let lastName = 'Weber'
    let userName ='@fturner'
    let email = 'garrett73@jexliz.com'
    let age = '23' 

    //edit user       
    let idUpdate = '1'
    let firstNameUpdate = 'Derick-1'
    let lastNameUpdate = 'Weber-1'
    let userNameUpdate = '@fturner-1'
    let emailUpdate = 'garrett73-1@jexliz.com'
    let ageUpdate = '24'
    
    beforeEach(() => {
        cy.visit('/')
        cy.get('nb-layout-column nb-card').eq(0).click()
    })

    it('Add a user to the table', () => {
        cy.visit('/pages/tables/smart-table', { failOnStatusCode: false });
        //add user    
        cy.get(addData.addButton).click()
        addData.addUserData(id, firstName, lastName, userName, email, age)
        addData.clickCheckMarkButton()

        //check user
        addData.verifyUserInTheTable(id, firstName, lastName, userName, email, age)
         
        //edit user    
        cy.get(addData.editButton).click() 
        addData.updateUserData(idUpdate, firstNameUpdate, lastNameUpdate, userNameUpdate, emailUpdate, ageUpdate)
        addData.clickCheckMarkButton()

        //check user
        addData.verifyUserInTheTable(idUpdate, firstNameUpdate, lastNameUpdate, userNameUpdate, emailUpdate, ageUpdate)
    })

    it('The user should be successfully complete the login form', () => {
        cy.visit('/auth/login', { failOnStatusCode: false }); 
        login.enterLoginData(email, password)
        login.submitLoginButton()
        cy.location().its('href').should('include', '/pages/dashboard')
    })
})