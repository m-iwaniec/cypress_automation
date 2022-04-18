/// <reference types = "Cypress" />

describe("Third test", function() {
    it("Third test case", function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       
        
// ALERT
        cy.get('#alertbtn').click()
        // select id/tag/class... for the alert button
        // ALERT SHOULD SHOW UP IN THE CYPRESS CONSOLE
        cy.get('[value="Confirm"]').click()

        // WINDOW:ALERT event (can be triggered in cypress)
        // validating alerts
        cy.on('window:alert', (str) => {
            // Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

// CONFIRM        
        // WINDOW:CONFIRM event
        cy.on('window:confirm', (str) => {
            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })


// CHILD TABS
        // child tabs - cypress does not handle that
        cy.get('#opentab').invoke('removeAttr', 'target ').click()
        // invoke('removeAttr', 'target ') - removes target attribute from the link
        // removeAttr is jquery
        // opens in the same windows, not new tab, because we removed the attribute target
        
        cy.url().should('include', 'https://www.rahulshettyacademy.com/')
        // assert


// GO TO PREVIOUS PAGE
        cy.go('back')
        cy.url().should('include', 'https://rahulshettyacademy.com/AutomationPractice/')


    })
})