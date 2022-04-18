/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe'

describe("Seventh test", function() {
    it("Seventh test case", function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       
    // FRAMES
    // npm install -D cypress-iframe

        cy.frameLoaded('#courses-iframe')
        // load the frame

        cy.iframe()
        .find('a[href*=mentorship]')
        // need to use iframe() and find() on a frame
        .eq(0)
        .click()

        cy
        .iframe()
        .find('h1[class*="pricing-title"]')
        .should('have.length', 2)

    })
})