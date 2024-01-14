/// <reference types="cypress" />

describe('Hillel-auto', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('nb-layout-column nb-card').eq(0).click()
  })

  it('User should be able to move to the next step', () => {
    cy.visit('/pages/layout/stepper', { failOnStatusCode: false });
    cy.get('.horizontal > .step-content > h3.ng-star-inserted').should('have.text', 'Step content #1')
    cy.get('.horizontal > .step-content > [aria-disabled="false"]').click()
    cy.get('.horizontal > .step-content > h3.ng-star-inserted').should('have.text', 'Step content #2')
    cy.get('.horizontal > .step-content > [nbsteppernext=""]').click()
    cy.get('.horizontal > .step-content > h3.ng-star-inserted').should('have.text', 'Step content #3')
    cy.get('.horizontal > .step-content > [nbsteppernext=""]').click()
    cy.get('.horizontal > .step-content > h3.ng-star-inserted').should('have.text', 'Step content #4')
  })

  it('User should see modal dialog', () => {
    cy.visit('/pages/modal-overlays/dialog', { failOnStatusCode: false });
    cy.contains('.nb-transition', 'Enter Name').click()
    cy.get('nb-dialog-container').should('be.visible')
    cy.get('.ng-star-inserted > nb-card > nb-card-header').should('have.text', 'Enter your name')
    cy.get('.ng-star-inserted > nb-card > nb-card-body > .size-medium').should('be.visible')
    cy.get('.cancel').should('be.visible')
    cy.get('.status-success').should('be.visible')
  })
})
