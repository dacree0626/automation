export class SaucePage{

    loginPage_uname = '[data-test="username"]'
    loginPage_pwd = '[data-test="password"]'
    loginPage_loginButton = '[data-test="login-button"]'

    navigate(url){
        cy.visit(url)
    }

    enterUserName(uname){
        cy.get(this.loginPage_uname).type(uname)
    }

    enterPassword(pwd){
        cy.get(this.loginPage_pwd).type(pwd)
    }

    clickLoginButton(){
        cy.get(this.loginPage_loginButton).click()
    }

}