/// <reference types = "Cypress" />

describe("Wordle test", function() {
    it("Loads", () => {
        cy.visit(Cypress.env('wordleURL'))
        cy.wait(2000)
        cy.get('#pz-gdpr-btn-accept').click()
        cy.get('game-icon[icon=close]:visible').click()
        cy.window().trigger('keydown')

    })
})
