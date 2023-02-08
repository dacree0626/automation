/// <reference types="cypress" />

// Write a script that uses Cypress/other e2e test framework to parse the latest 2 emails in your Gmail UI
// The script should

// 1. Not expose the email or password to your account
// 1a. https://docs.cypress.io/guides/end-to-end-testing/google-authentication
// 2. Pause for 2 factor if you need to enter in a 2 factor code
// 3. Navigate to your email client website after login
// 4. Open up the latest 2 emails in order
// 5. Log out the text of the latest email in that thread. (in Gmail, this is the first visible text that you see since threads are 
//    in reverse chronological order when you open up an email).
// This is meant to be a comprehensive exercise. This should exercise the ability to write a test, 
// understand how to navigate a webpage that you may not have control over how its built/deployed, 
// understand how to work with auth systems while still having a capable test, syntax around the test runner/test framework, 
// and returning or logging data to make it available to a human or other systems that may want to analyze the test results.

describe('Google', function () {
    beforeEach(function () {
      // cy.task('db:seed')
      cy.loginByGoogleApi()
    })
  
    it('shows onboarding', function () {
      cy.contains('Get Started').should('be.visible')
    })
  })