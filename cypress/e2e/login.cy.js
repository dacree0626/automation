/// <reference types="cypress" />
import {LoginPage} from "../pages/login_page.cy"

const loginPage = new LoginPage()

it('logs in for testing', () =>{
    loginPage.navigate('https://trytestingthis.netlify.app/');
    loginPage.enterUserName('test');
    loginPage.enterPassword('test');
    loginPage.clickLoginButton();

    // cy.visit('https://trytestingthis.netlify.app/')
    // cy.get('#uname').type('test')
    // cy.get('#pwd').type('test')
    // cy.get('[type="submit"]').click()
})

it('does other stuff on trytesting', () =>{
    loginPage.navigate('https://trytestingthis.netlify.app/');
    cy.get('.side.ex1 button').eq(1).contains('Double-click me').dblclick()
    // cy.findByText('Double-click me').should('be.visible')
    // cy.contains('Double-click me').dblclick()
    cy.get('.side.ex1').scrollTo('top')
    cy.get('.pop-up-alert > #demo').should('be.visible')
    
})

it('does a drag and drop test', () =>{
    loginPage.navigate('https://trytestingthis.netlify.app/')
    let x, y
    cy.get('#div1').then($el => {
        const result = $el[0].getBoundingClientRect()
        console.log(result.x)
        x = result.x
        y = result.y
    }).then(()=>{
        cy.get('#drag1')
    .trigger('mousedown', { which: 1 })
    // .trigger('mousemove', { clientX: clix, clientY: y-50 }).wait(100)
    // .trigger('mousemove', { clientX: x, clientY: y-40 }).wait(100)
    // .trigger('mousemove', { clientX: x, clientY: y-30 }).wait(100)
    // .trigger('mousemove', { clientX: x, clientY: y-20 }).wait(100)
    // .trigger('mousemove', { clientX: x, clientY: y-10 }).wait(100)
    .trigger('mousemove', { clientX: x, clientY: y })
    .pause()
    .trigger('mouseup', { force: true })
    })
    // cy.get('#div1').trigger('drop')
})

it('play with the scrollbar', () => {
    loginPage.navigate('https://trytestingthis.netlify.app/')
    cy.get('#a').trigger('mousedown', { which: 1 })
//   .invoke('val', 60)
//   .trigger('change').click()
})

it.only('opens the alert modal', () => {
    

    loginPage.navigate('https://trytestingthis.netlify.app/')
    var alerted = false;
    cy.on('window:confirm', msg => {
        console.log(msg, "hello, its msg, the flavor enhancer")
        alerted = msg
    });
    cy.get('.side.ex1 button').eq(0).contains('Your Sample Alert Button!').click()
    .then( () => {
        console.log(alerted)
        expect(alerted).to.equal('Press a button!')

    })
})