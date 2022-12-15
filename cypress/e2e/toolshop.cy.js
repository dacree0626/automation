/// <reference types="cypress" />
import {LoginPage} from "../pages/login_page.cy"

const loginPage = new LoginPage()

it('navigates to the tool shop', () =>{
    loginPage.navigate('https://practicesoftwaretesting.com/')
    cy.get('.navbar-brand').should('exist')
})

it('uses the search box', () => {
    loginPage.navigate('https://practicesoftwaretesting.com/')
    cy.get('[data-test="search-query"]').then(el => {
        el[0].scrollIntoView();
        return el;
      }).wait(100).type('pliers{enter}')
    // cy.get('h3').should('contain','Searched for: pliers')
    cy.get('[data-test="product-name"]').each(name => {
        cy.wrap(name).contains('pliers',{matchCase: false})
        // cy.wrap(name).should('contain','pliers',{matchCase: false})
    })
    // cy.wait(200)
    // cy.get('h3').should('contain','Searched for: pliers')
})

it.only('uses the check box for hammers', async () => {
    loginPage.navigate('https://practicesoftwaretesting.com/')
    await cy.scrollTo(0,500)
    // cy.get('.collapse > :nth-child(12)').should('exist')
    await cy.get('[data-test="category-3"]').click()
})