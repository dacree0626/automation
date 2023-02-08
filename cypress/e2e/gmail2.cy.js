/// <reference types="cypress" />
describe('Google', function () {
    it('visits gmail', ()=>{
        cy.on('uncaught:exception', (err, runnable) => {
            console.error('Google Login -> uncaught:exception', err);
            // Skip test from https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/fundamentals__errors
            return false;
          });
        cy.visit('mail.google.com')
        cy.get('input[type="email"]').type('dacree0626@gmail.com')
        cy.get('[id="identifierNext"]').click()
    })
})