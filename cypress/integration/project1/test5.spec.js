/// <reference types = "Cypress" />

describe("Fifth test", function() {
    it("Fifth test case", function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       

// MOUSE HOVER POP UPS
        // mouse hover events are not supported in cypress, but you can force click

        // cy.get('#mousehover').invoke('show')
        // jQuery show() method shows the hidden, selected elements
        // the above does not work because jQuery looks for immediate child and id mousehover is a grandchild of 'top'

        cy.get('.mouse-hover-content').invoke('show')
        // class mouse-hover-content is a parent of the hidden element 'top'
        // jquery show works only on get
        // invoke() helps with use of jquery

        cy.contains('Top').click()
        // can be also clicked forcibly
        // cy.contains('Top').click({force:true})
        // no solution in selenium
        cy.url().should('include', 'top')

    })
})