/// <reference types="cypress" />
import {SaucePage} from "../pages/sauce_page.cy"

const saucePage = new SaucePage()

it('logs in as standard_user and places an order', () =>{
    saucePage.navigate('https://www.saucedemo.com/');
    saucePage.enterUserName('standard_user');
    saucePage.enterPassword('secret_sauce');
    saucePage.clickLoginButton();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.inventory_item_name').contains('Sauce Labs Backpack').should('be.visible')
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type("Dane")
    cy.get('[data-test="lastName"]').type("Acree")
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('#checkout_complete_container').contains('THANK YOU FOR YOUR ORDER').should('be.visible')
})

it.only('logs in as standard_user and sorts by price low to high', () =>{
    saucePage.navigate('https://www.saucedemo.com/');
    saucePage.enterUserName('standard_user');
    saucePage.enterPassword('secret_sauce');
    saucePage.clickLoginButton();

    cy.get('[data-test="product_sort_container"]').select(2)
    cy.get('.inventory_list').children().eq(0).parent().within(() => {
        cy.get(".inventory_item").eq(0).parent().within(() => {
            cy.get(".inventory_item_name").eq(0).should('have.value', 'Sauce Labs Onesie')
    })
     })
    })