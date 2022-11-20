export class LoginPage{

    loginPage_uname = '#uname'
    loginPage_pwd = '#pwd'
    loginPage_loginButton = '[type="submit"]'

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