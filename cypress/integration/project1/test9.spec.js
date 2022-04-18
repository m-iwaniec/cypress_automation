/// <reference types = "Cypress" />

describe("Ninth test", function() {

    before(function() {

        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })


    it("Ninth test case", function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        
        cy.get(':nth-child(2) > .nav-link').click()


        
    // A LIST OF PRODUCTS - if text matches to a product, grab it
        
        // find the COMMON ATTRIBUTE, e.g. column / name / ....
        cy.get('h4.card-title').each(($e1, index, $list) => {
            
            const text = $e1.text()

            if(text.includes('Blackberry'))
                {
                    // cy.get(':nth-child(4) > .card > .card-footer > .btn').click()
                    // button.btn.btn-info = tagname.class
                    // cy.get('button.btn.btn-info').eq(3).click()
                    cy.get('button.btn.btn-info').eq(index).click()
                    
                }
        })




    // CUSTOM COMMANDS = /support/commands.js
        cy.selectProduct('Samsung')
        cy.log('Added one Samsung phone')
        cy.selectProduct('Samsung')
        cy.selectProduct('Samsung')
        cy.selectProduct('Samsung')
        

        // in fixtures: "productName": ["Blackberry", "Nokia Edge", "iphone", "Samsung"],
        this.data.productName
        
        // forEach() method executes a provided function once for each array element
        this.data.productName.forEach(function(element) {

            cy.log(element)

            cy.selectProduct(element)
            // adds to cart all items on the list in fixtures

        })



    cy.go('back')   // go to previous page




    // PAUSE
    
    cy.get('#inlineRadio1').click()

    cy.pause()
    // This does not set a debugger in your code, unlike .debug()
    // It just pauses the test until you press the 'resume' button

    cy.get('#inlineRadio3').should('be.disabled')



    // TEST DEBUGGING
    
    // cy.debug()
    // You need to have your Developer Tools open for .debug() to hit the breakpoint.
    cy.get('#inlineRadio2').check().should('be.checked').debug()


    })
})