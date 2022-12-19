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

it('logs in as standard_user and sorts by price low to high', () =>{
    saucePage.navigate('https://www.saucedemo.com/');
    saucePage.enterUserName('standard_user');
    saucePage.enterPassword('secret_sauce');
    saucePage.clickLoginButton();

    cy.get('[data-test="product_sort_container"] option').then(dropDownItems =>{
        console.log(dropDownItems)
        const dropdownItemsList = Array.from(dropDownItems, dropdown => dropdown.innerText)
        console.log(dropdownItemsList)
        const priceLowToHighIndex = dropdownItemsList.findIndex((item) => {
            return item == 'Price (low to high)' //frailest part of test, if this text changes the test fails
        })
        return priceLowToHighIndex
    }).then((priceLowToHighIndex) => {
        cy.get('[data-test="product_sort_container"]').select(priceLowToHighIndex)
    })

    cy.get('.inventory_item > .inventory_item_description > .pricebar > .inventory_item_price').then($items => {
        const itemPrices = Array.from($items, item => {
            return parseFloat(item.innerText.substring(1,item.innerText.length))
        })
        const sortedItemPrices = Array.from(itemPrices)
        sortedItemPrices.sort((a, b) => {
            return a - b;
          });
        expect(itemPrices).to.deep.equal(sortedItemPrices)
    })
})

it('logs in as a locked_out_user and is warned', () =>{
    saucePage.navigate('https://www.saucedemo.com/');
    cy.get('[data-test="error"]').should('not.exist')
    cy.get('.error-message-container').should('have.text','')
    saucePage.enterUserName('locked_out_user');
    saucePage.enterPassword('secret_sauce');
    saucePage.clickLoginButton();
    cy.get('[data-test="error"]').should('exist')
    cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')
})