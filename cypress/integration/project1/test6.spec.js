/// <reference types = "Cypress" />

describe("Sixth test", function() {
    it("Sixth test case", function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       

// CHILD WINDOWS

        // after clicking on this element, new window opens
        cy.get('#opentab')    // on this training website, href for new window (#openwindow) is inside js function (onclick())
        // .prop('href')
        // prop() is a jquery method which returns the value of the property
        // prop is like text method (jquery), need to manually solve the promise
        
        .then(function(e1){

            const url = e1.prop('href')
            // can use const or var
            cy.log(url) // to prove you grabbed the url
            
            cy.visit(url)
            // cypress cannot switch domains e.g. cannot go to google.com now
            // cypress allows to change only subdomains, e.g. can go to 'https://rahulshettyacademy.com/seleniumPractise/#/

        })


    })
})