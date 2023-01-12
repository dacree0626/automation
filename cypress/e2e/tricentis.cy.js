/// <reference types="cypress" />

it("navigates to the Tricentis page", () => {
    cy.visit('https://www.tricentis.com/');
    cy.contains("Products").should("be.visible")
    cy.get(':nth-child(1) > .HeaderMegaMenu_title__kZxfb')
        .contains('svg')
        .trigger("mouseover")
})